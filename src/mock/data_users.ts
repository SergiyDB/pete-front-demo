import type {
  User,
} from 'src/interfaces/app_interfaces';

import { UserRole } from 'src/enums/userRoles';
import { UserType } from 'src/enums/userTypes';

export const Users: User[] = [
  {
    id: 1,
    full_name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    user_role: UserRole.ADMIN,
    user_type: UserType.COMPANY,
    company_id: 1,
    imageUrl: 'src/assets/images/avatars/male-01.jpg',
  },
  {
    id: 2,
    full_name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
    user_role: UserRole.TEACHER,
    user_type: UserType.SCHOOL,
    school_id: 2,
    imageUrl: 'src/assets/images/avatars/female-01.jpg'
    // imageUrl: '',
  },
  {
    id: 3,
    full_name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    password: 'password789',
    user_role: UserRole.ADMIN,
    user_type: UserType.TUTOR,
    imageUrl: 'src/assets/images/avatars/male-02.jpg'
  },
  {
    id: 4,
    full_name: 'Emily Davis',
    email: 'emily.davis@example.com',
    password: 'password101',
    user_role: UserRole.ADMIN,
    user_type: UserType.SCHOOL,
    school_id: 3,
    imageUrl: 'src/assets/images/avatars/female-02.jpg'
  },
  {
    id: 5,
    full_name: 'Daniel Brown',
    email: 'daniel.brown@example.com',
    password: 'password202',
    user_role: UserRole.TEACHER,
    user_type: UserType.COMPANY,
    company_id: 4,
    imageUrl: 'src/assets/images/avatars/male-03.jpg'
  },
  {
    id: 6,
    full_name: 'Sophia Wilson',
    email: 'sophia.wilson@example.com',
    password: 'password303',
    user_role: UserRole.ADMIN,
    user_type: UserType.TUTOR,
    imageUrl: 'src/assets/images/avatars/female-03.jpg'
  },
  {
    id: 7,
    full_name: 'Ethan Taylor',
    email: 'ethan.taylor@example.com',
    password: 'password404',
    user_role: UserRole.TEACHER,
    user_type: UserType.SCHOOL,
    school_id: 5,
    imageUrl: 'src/assets/images/avatars/male-04.jpg'
  },
  {
    id: 8,
    full_name: 'Olivia Martinez',
    email: 'olivia.martinez@example.com',
    password: 'password505',
    user_role: UserRole.ADMIN,
    user_type: UserType.COMPANY,
    company_id: 6,
    imageUrl: 'src/assets/images/avatars/female-04.jpg'
  },
  {
    id: 9,
    full_name: 'Aiden White',
    email: 'aiden.white@example.com',
    password: 'password606',
    user_role: UserRole.ADMIN,
    user_type: UserType.TUTOR,
    imageUrl: 'src/assets/images/avatars/male-05.jpg'
  },
  {
    id: 10,
    full_name: 'Charlotte Garcia',
    email: 'charlotte.garcia@example.com',
    password: 'password707',
    user_role: UserRole.ADMIN,
    user_type: UserType.SCHOOL,
    school_id: 7,
    imageUrl: 'src/assets/images/avatars/female-05.jpg'
  },
  {
    id: 11,
    full_name: 'Lucas Thompson',
    email: 'lucas.thompson@example.com',
    password: 'password808',
    user_role: UserRole.TEACHER,
    user_type: UserType.COMPANY,
    company_id: 8,
    imageUrl: 'src/assets/images/avatars/male-06.jpg'
  },
  {
    id: 12,
    full_name: 'Amelia Anderson',
    email: 'amelia.anderson@example.com',
    password: 'password909',
    user_role: UserRole.ADMIN,
    user_type: UserType.TUTOR,
    imageUrl: 'src/assets/images/avatars/female-06.jpg'
  },
  {
    id: 13,
    full_name: 'Mason Martinez',
    email: 'mason.martinez@example.com',
    password: 'password010',
    user_role: UserRole.TEACHER,
    user_type: UserType.SCHOOL,
    school_id: 9,
    imageUrl: 'src/assets/images/avatars/male-07.jpg'
  },
  {
    id: 14,
    full_name: 'Isabella Clark',
    email: 'isabella.clark@example.com',
    password: 'password111',
    user_role: UserRole.ADMIN,
    user_type: UserType.COMPANY,
    company_id: 10,
    imageUrl: 'src/assets/images/avatars/female-07.jpg'
  },
  {
    id: 15,
    full_name: 'James Rodriguez',
    email: 'james.rodriguez@example.com',
    password: 'password222',
    user_role: UserRole.ADMIN,
    user_type: UserType.TUTOR,
    imageUrl: 'src/assets/images/avatars/male-08.jpg'
  }
];