import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';
import { initializeState, getState } from 'src/store/appState';

export default route(async function (/* { store, ssrContext } */) {
  await initializeState();  // Ожидаем завершения инициализации состояния

  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const { isUserLoggedIn, user } = getState();

    console.log('isUserLoggedIn:', isUserLoggedIn);
    console.log('Current path:', to.path);

    if (!isUserLoggedIn && !to.path.startsWith('/auth')) {
      next({ path: '/auth/sign-in' });
    } else if (isUserLoggedIn) {
      const userType = user?.user_type;
      const userRole = user?.user_role;

      if (to.path.startsWith('/auth')) {
        if (userType === 'school') {
          if (userRole === 'admin') {
            next({ path: '/school/overview' });
          } else {
            next({ path: '/school/grade' });
          }
        } else if (userType === 'company') {
          if (userRole === 'admin') {
            console.log('this case')
            next({ path: '/company/overview' });
          } else {
            next({ path: '/company/level' });
          }
        } else if (userType === 'tutor') {
          next({ path: '/tutor/overview' });
        }
      } else if (to.path === '/') {
        if (userType === 'school') {
          if (userRole === 'admin') {
            next({ path: '/school/overview' });
          } else {
            next({ path: '/school/grade' });
          }
        } else if (userType === 'company') {
          if (userRole === 'admin') {
            next({ path: '/company/overview' });
          } else {
            next({ path: '/company/level' });
          }
        } else if (userType === 'tutor') {
          next({ path: '/tutor/overview' });
        }
      } else {
        next();
      }
    } else {
      console.log('THIS CASE');
      next();
    }
  });

  return Router;
});
