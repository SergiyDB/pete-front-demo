import {
  companyTeachersData,
  schoolTeachersData
} from 'src/mock/data_teachers';

import {
  teachersSummaryData
} from 'src/mock/data_teachers_summary';

import {
  teachersAverage
} from 'src/mock/data_teachers_average'

export default class TeachersService {


  getTeachersInfoList(teacherType: string) {
    if (teacherType === 'company') {
      return companyTeachersData;
    } else if (teacherType === 'school') {
      return schoolTeachersData;
    }
  }
  getTeacherInfoByTeacherId(teacherType: string, teacherId: number) {
    if (teacherType === 'company') {
      return companyTeachersData.find(teacher => teacher.id === teacherId);
    } else if (teacherType === 'school') {
      return schoolTeachersData.find(teacher => teacher.id === teacherId);
    }
  }

  getTeacherSummaryByTeacherId(teacherType: string, teacherId: number) {
    if (teacherType === 'company') {
      return teachersSummaryData.find(teacher => teacher.id === teacherId);
    } else if (teacherType === 'school') {
      return teachersSummaryData.find(teacher => teacher.id === teacherId);
    }
  }


  getTeacherAveragesByTeacherId(teacherId: number) {
    return teachersAverage.find(teacher => teacher.id === teacherId);
  }

}

