import { Users } from 'src/mock/data_users';
import { Schools } from 'src/mock/data_schools';
import { Companies } from 'src/mock/data_companies';

// import type { UserRole, UserType } from 'src/interfaces/app_interfaces';

import { setUser } from 'src/store/appState';
import { UserRole } from 'src/enums/userRoles';
import { UserType } from 'src/enums/userTypes';

export default class AuthService {
  signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const user = Users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        resolve({ status: 'ok', user });
      } else {
        reject(new Error('Incorrect email or password'));
      }
    });
  }

  signUpSchool(
    fullName: string,
    email: string,
    password: string,
    schoolCode: string
  ) {
    return new Promise((resolve, reject) => {
      const school = Schools.find((school) => school.code === schoolCode);

      if (school) {
        const newUser = {
          id: Users.length + 1, // Generate new user ID
          full_name: fullName,
          email: email,
          password: password,
          user_role: UserRole.TEACHER, // Set user role
          user_type: UserType.SCHOOL, // Set user type
          school_id: school.id, // Assign company ID
          imageUrl: '', // Default avatar URL
        };

        setUser(newUser);
        resolve({ status: 'ok', user: newUser });
      } else {
        reject(new Error('Incorrect school code'));
      }
    });
  }

  signUpCompany(
    fullName: string,
    email: string,
    password: string,
    companyCode: string
  ) {
    return new Promise((resolve, reject) => {
      const company = Companies.find((company) => company.code === companyCode);

      if (company) {
        const newUser = {
          id: Users.length + 1, // Generate new user ID
          full_name: fullName,
          email: email,
          password: password,
          user_role: UserRole.TEACHER, // Set user role
          user_type: UserType.COMPANY, // Set user type
          company_id: company.id, // Assign company ID
          imageUrl: '', // Default avatar URL
        };

        setUser(newUser);
        resolve({ status: 'ok', user: newUser });
      } else {
        reject(new Error('Incorrect company code'));
      }
    });
  }

  signUpTutor(fullName: string, email: string, password: string) {
    return new Promise((resolve) => {
      // const company = Companies.find(company => company.code === companyCode);

      // if (company) {

      const newUser = {
        id: Users.length + 1, // Generate new user ID
        full_name: fullName,
        email: email,
        password: password,
        user_role: UserRole.ADMIN, // Set user role
        user_type: UserType.TUTOR, // Set user type
        company_id: 3, // Assign company ID
        imageUrl: '', // Default avatar URL
      };

      setUser(newUser);
      resolve({ status: 'ok', user: newUser });

      // } else {
      // reject(new Error('Incorrect company code'));
      // }
    });
  }

  resetUserPassword(email: string) {
    return new Promise((resolve, reject) => {
      if (true) {
        console.log(email);

        resolve({ status: 'ok' });
      } else {
        reject(new Error('Incorrect email'));
      }
    });
  }
}
