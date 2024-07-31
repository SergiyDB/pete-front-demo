import { reactive, readonly } from 'vue';
import { AverageIndicatorLabel } from 'src/enums/averageIndicators';
import type { User } from 'src/interfaces/app_interfaces';

interface State {
  user: User;
  isUserLoggedIn: boolean;
  selectedIndicator: string | null;
};

const nullishUserState: User = {
  id: null,
  full_name: '',
  email: '',
  password: '',
  user_role: null,
  user_type: null,
};

const state: State = reactive<State>({
  user: { ...nullishUserState },
  isUserLoggedIn: false,
  selectedIndicator: AverageIndicatorLabel.AVE_CEFR, // Значение по умолчанию
});

// Функция для получения начального состояния из localStorage
async function initializeState(): Promise<void> {
  const savedState = localStorage.getItem('appState');
  console.log(savedState);
  if (savedState) {
    const parsedState: State = JSON.parse(savedState);
    // Устанавливаем начальное состояние из сохраненного состояния
    state.user = parsedState.user;
    state.isUserLoggedIn = parsedState.isUserLoggedIn;
    state.selectedIndicator = parsedState.selectedIndicator || AverageIndicatorLabel.AVE_CEFR;
  } else {
    // Если сохраненное состояние отсутствует, устанавливаем начальное состояние по умолчанию
    state.user = { ...nullishUserState };
    state.isUserLoggedIn = false;
    state.selectedIndicator = AverageIndicatorLabel.AVE_CEFR;
  }
}

function getUserId(): number | null {
  return state.user.id;
}

function getUserStatus(): boolean {
  return state.isUserLoggedIn;
}

function getSelectedIndicator(): string {
  return state.selectedIndicator ?? AverageIndicatorLabel.AVE_CEFR; // Возвращает значение по умолчанию, если selectedIndicator равен null
}

function setUser(newUser: User): void {
  state.user = newUser;
  state.isUserLoggedIn = true;
  localStorage.setItem('appState', JSON.stringify(state));
}

function setSelectedIndicator(indicator: string): void {
  state.selectedIndicator = indicator;
  localStorage.setItem('appState', JSON.stringify(state));
}

function logoutUser(): void {
  state.user = { ...nullishUserState }; // Создаем копию объекта, чтобы не мутировать исходный объект
  state.isUserLoggedIn = false;
  state.selectedIndicator = AverageIndicatorLabel.AVE_CEFR; // Сбрасываем выбранный индикатор
  localStorage.setItem('appState', JSON.stringify(state));
}

function getState(): Readonly<State> {
  return readonly(state);
}

export {
  getUserId,
  getUserStatus,
  getSelectedIndicator,
  setSelectedIndicator,
  getState,
  setUser,
  logoutUser,
  initializeState
};
