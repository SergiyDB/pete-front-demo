// export type UserRole = 'admin' | 'teacher';
// export type UserType = 'company' | 'school' | 'tutor';
import { UserType } from 'src/enums/userTypes';
import { UserRole } from 'src/enums/userRoles';
import { AverageIndicatorLabel } from 'src/enums/averageIndicators';

export interface CEFRLevel {
  id: string;    // Уникальный идентификатор
  label: string; // Отображаемое название уровня
  value: number; // Числовое значение уровня
}

export interface User {
  id: number | null;
  full_name: string;
  email: string;
  password: string;
  user_role?: UserRole | null;
  user_type?: UserType | null;

  company_id? : number;
  school_id? : number;
  imageUrl? : string;
};

export interface Company {
  id: number;
  name: string;
  code: string;
};

export interface School {
  id: number;
  name: string;
  code: string;
};

export interface Group {
  id: number;
  name: string;
  school_id?: number;
  company_id?: number;
  tutor_id?: number;
  teachers_ids?: number[];
  students_ids?: number[];
  level_id?: string;
  grade_id?: string;
};

// export interface AverageIndicatorData {
//   name: string;
//   title: string;
//   value: string | number;
//   unit?: string;
//   additionalText?: string;
//   additionalValue?: string | number;
//   additionalUnit?: string;
// };

// export interface AverageIndicatorValue {
//   name: AverageIndicator
//   value: string | number;
// }

export interface Average {
  indicator: string;
  name: AverageIndicatorLabel;
  value: CEFRLevel | string | number;
  unit: string;
  color: string;
  colorHEX: string;
}

// export interface SchoolAverage {
//   indicator: string;
//   name: AverageIndicator;
//   value: string | number;
//   unit: string;
//   color: string;
// }


// export interface TutorAverage {
//   indicator: string;
//   name: AverageIndicator;
//   value: string | number;
//   unit: string;
//   color: string;
// }


export interface SimpleIndicatorData {
  title: string;
  value: string | number;
  unit?: string;
};


export interface FollowUpItem {
  title: string;
  description: string;
};

export interface FollowUpData {
  today: FollowUpItem[];
  week: FollowUpItem[];
};

