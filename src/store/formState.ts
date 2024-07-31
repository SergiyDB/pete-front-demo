import { reactive } from 'vue';
import { getState } from './appState';

import { UserRole } from 'src/enums/userRoles';
import { UserType } from 'src/enums/userTypes';
import {
  AverageIndicator,
  // Indicator
} from 'src/enums/averageIndicators';

import { CompanyService }  from 'src/services/company_service';
import { SchoolService } from 'src/services/school_service';
// import TutorService from 'src/services/tutor_service';

// import type { CEFRLevel } from 'src/interfaces/app_interfaces';
import { CEFRLevels } from 'src/constants/cefrLevels';

import { DateTimeService } from 'src/services/datetime_service';

interface BaseForm {
  teacher_selectedMonths: number[];
  teacher_selectedIndicator: AverageIndicator;

  student_selectedMonths: number[];
  student_selectedIndicator: AverageIndicator;
}

export interface CompanyAdminForm extends BaseForm {
  overview_selectedAveIndicator: AverageIndicator;
  overview_selectedMonths: number[];
  overview_selectedLevel: string | undefined; // Обновлено
  overview_followUp: 'today' | 'week';

  level_selectedAveIndicator: AverageIndicator;
  level_selectedMonths: number[];
  level_selectedLevel: string | undefined; // Обновлено
  level_selectedGroup: number;
}

export interface CompanyTeacherForm extends BaseForm {
  level_selectedAveIndicator: AverageIndicator;
  level_selectedMonths: number[];
  level_selectedLevel: string | undefined; // Обновлено
  level_selectedGroup: number;
}

export interface SchoolAdminForm extends BaseForm {
  overview_selectedAveIndicator: AverageIndicator;
  overview_selectedMonths: number[];
  overview_selectedGrade: string | undefined; // Обновлено
  overview_followUp: 'today' | 'week';

  grade_selectedAveIndicator: AverageIndicator;
  grade_selectedMonths: number[];
  grade_selectedGrade: string | undefined; // Обновлено
  grade_selectedGroup: number;
}

export interface SchoolTeacherForm extends BaseForm {
  grade_selectedAveIndicator: AverageIndicator;
  grade_selectedMonths: number[];
  grade_selectedGrade: string | undefined; // Обновлено
  grade_selectedGroup: number;
}

export interface TutorAdminForm extends BaseForm {
  overview_selectedAveIndicator: AverageIndicator;
  overview_selectedMonths: number[];
  overview_selectedLevel: string | undefined; // Обновлено
  overview_followUp: 'today' | 'week';

  level_selectedAveIndicator: AverageIndicator;
  level_selectedMonths: number[];
  level_selectedLevel: string | undefined; // Обновлено
  level_selectedGroup: number;
}

type FormState =
  | CompanyAdminForm
  | CompanyTeacherForm
  | SchoolAdminForm
  | SchoolTeacherForm
  | TutorAdminForm;

const dateTimeService = new DateTimeService();
const companyService = new CompanyService();
const schoolService = new SchoolService();

const currentDateObject = dateTimeService.getCurrentDateTime();
const currentMonth = currentDateObject.getMonth();

const { user } = getState();

let companyInitialLevelSelection;
let schoolInitialGradeSelection;
let levelId: string | undefined;

if (user && user.user_role && user.user_type) {
  const userType: UserType = user.user_type;

  switch (userType) {
    case UserType.COMPANY:
      const companyId = user.company_id ?? -1;
      const companyAvgLevel = companyService
        .getCompanyAverageIndicatorsByCompanyId(companyId)
        ?.averages
        .find(elem => elem.indicator === 'AVE_CEFR')
        ?.value;



      if (typeof companyAvgLevel === 'object' && 'id' in companyAvgLevel) {
        levelId = companyAvgLevel.id;
      } else if (typeof companyAvgLevel === 'string' || typeof companyAvgLevel === 'number') {
        levelId = 'unknown';
      }

      companyInitialLevelSelection = CEFRLevels.find(level => level.id === levelId)?.id // Обновлено
      break;

    case UserType.SCHOOL:
      const schoolId = user.school_id ?? -1;
      const schoolAvgLevel = schoolService
        .getSchoolAverageIndicatorsBySchoolId(schoolId)
        ?.averages
        .find(elem => elem.indicator === 'AVE_CEFR')
        ?.value;

      console.log(schoolAvgLevel);

      if (typeof schoolAvgLevel === 'object' && 'id' in schoolAvgLevel) {
        levelId = schoolAvgLevel.id;
      } else if (typeof schoolAvgLevel === 'string' || typeof schoolAvgLevel === 'number') {
        levelId = 'unknown';
      }

      schoolInitialGradeSelection = CEFRLevels.find(level => level.id === levelId)?.id // Обновлено
      break;

  }
}



const initialFormState: FormState = {
  overview_selectedAveIndicator: AverageIndicator.AVE_CEFR,
  overview_selectedMonths: [ currentMonth, ],
  overview_selectedLevel: companyInitialLevelSelection, // Обновлено
  overview_followUp: 'today',
  level_selectedAveIndicator: AverageIndicator.AVE_CEFR,
  level_selectedMonths: [ currentMonth, ],
  level_selectedLevel: companyInitialLevelSelection, // Обновлено
  level_selectedGroup: 0,
  teacher_selectedMonths: [currentMonth],
  teacher_selectedIndicator: AverageIndicator.AVE_CEFR,
  student_selectedMonths: [ currentMonth, ],
  student_selectedIndicator: AverageIndicator.AVE_CEFR,
  overview_selectedGrade: schoolInitialGradeSelection, // Обновлено
  grade_selectedAveIndicator: AverageIndicator.AVE_CEFR,
  grade_selectedMonths: [currentMonth],
  grade_selectedGrade: schoolInitialGradeSelection, // Обновлено
  grade_selectedGroup: 0
} as FormState;


const formState = reactive<FormState>({ ...initialFormState });

export function initFormState(): void {

  if (user && user.user_role && user.user_type) {
    const userType: UserType = user.user_type;
    const userRole: UserRole = user.user_role;
    let levelId: string | undefined;

    switch (userType) {
      case UserType.COMPANY:
        const companyId = user.company_id ?? -1;
        const companyService = new CompanyService();
        const companyAvgLevel = companyService
          .getCompanyAverageIndicatorsByCompanyId(companyId)
          ?.averages
          .find(elem => elem.indicator === 'AVE_CEFR')
          ?.value;



        if (typeof companyAvgLevel === 'object' && 'id' in companyAvgLevel) {
          levelId = companyAvgLevel.id;
        } else if (typeof companyAvgLevel === 'string' || typeof companyAvgLevel === 'number') {
          // Обработка, если это строка или число
          // Например, вы можете использовать его напрямую или преобразовать
          levelId = 'unknown'; // Вставьте подходящее значение
        }

        if (userRole === UserRole.ADMIN) {
          Object.assign(formState, {
            overview_selectedMonths: [currentMonth],
            level_selectedMonths: [currentMonth],
            student_selectedMonths: [currentMonth],
            teacher_selectedMonths: [currentMonth],
            overview_selectedLevel: CEFRLevels.find(level => level.id === levelId)?.id, // Обновлено
            level_selectedLevel: CEFRLevels.find(level => level.id === levelId)?.id, // Обновлено
          });
        } else if (userRole === UserRole.TEACHER) {
          Object.assign(formState, {
            level_selectedMonths: [currentMonth],
            student_selectedMonths: [currentMonth],
            teacher_selectedMonths: [currentMonth],
            level_selectedLevel: CEFRLevels.find(level => level.id === levelId)?.id, // Обновлено
          });
        }
        break;

      case UserType.SCHOOL:
        const schoolId = user.school_id ?? -1;
        const schoolService = new SchoolService();
        const schoolAvgLevel = schoolService
          .getSchoolAverageIndicatorsBySchoolId(schoolId)
          ?.averages
          .find(elem => elem.indicator === 'AVE_CEFR')
          ?.value;

        if (typeof schoolAvgLevel === 'object' && 'id' in schoolAvgLevel) {
          levelId = schoolAvgLevel.id;
        } else if (typeof schoolAvgLevel === 'string' || typeof schoolAvgLevel === 'number') {
          // Обработка, если это строка или число
          // Например, вы можете использовать его напрямую или преобразовать
          levelId = 'unknown'; // Вставьте подходящее значение
        }

        if (userRole === UserRole.ADMIN) {
          Object.assign(formState, {
            overview_selectedMonths: [currentMonth],
            grade_selectedMonths: [currentMonth],
            student_selectedMonths: [currentMonth],
            teacher_selectedMonths: [currentMonth],
            overview_selectedGrade: CEFRLevels.find(level => level.id === levelId)?.id, // Обновлено
            grade_selectedGrade: CEFRLevels.find(level => level.id === levelId)?.id, // Обновлено
          });
        } else if (userRole === UserRole.TEACHER) {
          Object.assign(formState, {
            grade_selectedMonths: [currentMonth],
            student_selectedMonths: [currentMonth],
            teacher_selectedMonths: [currentMonth],
            grade_selectedGrade: CEFRLevels.find(level => level.id === levelId)?.id, // Обновлено
          });
        }
        break;

      case UserType.TUTOR:
        if (userRole === UserRole.TEACHER) {
          Object.assign(formState, {
            overview_selectedMonths: [currentMonth],
            level_selectedMonths: [currentMonth],
            student_selectedMonths: [currentMonth],
            overview_selectedLevel: CEFRLevels.find(level => level.id === 'cefr_b2'),
            level_selectedLevel: CEFRLevels.find(level => level.id === 'cefr_b2'),
          });
        }
        break;

      default:
        throw new Error('Unknown user type or role');
    }
  } else {
    throw new Error('Invalid combination of user type and role');
  }
}

// GETTERS

export function getCompanyOverviewSelectedIndicator(): AverageIndicator {
  return (formState as CompanyAdminForm).overview_selectedAveIndicator;
}

export function getCompanyLevelSelectedIndicator(): AverageIndicator {
  return (formState as CompanyAdminForm | CompanyTeacherForm).level_selectedAveIndicator;
}

export function getSchoolOverviewSelectedIndicator(): AverageIndicator {
  return (formState as SchoolAdminForm).overview_selectedAveIndicator;
}

export function getSchoolGradeSelectedIndicator(): AverageIndicator {
  return (formState as SchoolAdminForm | SchoolTeacherForm).grade_selectedAveIndicator;
}

export function getFormState(): FormState {
  return {...formState};
}

export function getOriginalFormState(): FormState {
  return formState;
}

// SETTERS

export function setCompanyOverviewSelectedIndicator(indicator: AverageIndicator): void {
  if ('overview_selectedAveIndicator' in formState) {
    (formState as CompanyAdminForm).overview_selectedAveIndicator = indicator;
  }
}

export function setCompanyLevelSelectedIndicator(indicator: AverageIndicator): void {
  if ('level_selectedAveIndicator' in formState) {
    (formState as CompanyAdminForm | CompanyTeacherForm).level_selectedAveIndicator = indicator;
  }
}

export function setSchoolOverviewSelectedIndicator(indicator: AverageIndicator): void {
  if ('overview_selectedAveIndicator' in formState) {
    (formState as SchoolAdminForm).overview_selectedAveIndicator = indicator;
  }
}

export function setSchoolGradeSelectedIndicator(indicator: AverageIndicator): void {
  if ('grade_selectedAveIndicator' in formState) {
    (formState as SchoolAdminForm | SchoolTeacherForm).grade_selectedAveIndicator = indicator;
  }
}

export function resetFormState(): void {
  console.log(initialFormState);
  Object.assign(formState, { ...initialFormState });
}



