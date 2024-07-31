import {
  companyStudentsData,
  schoolStudentsData,

} from 'src/mock/data_students';

import {
  studentsAverage
} from 'src/mock/data_students_average';

import {
  companyStudentsSummaryData,
  schoolStudentsSummaryData,
} from 'src/mock/data_students_summary';

export default class StudentsService {

  getStudentInfoByStudentId(studentType: string, studentId: number) {
    if (studentType === 'company') {
      return companyStudentsData.find(student => student.id === studentId);
    } else if (studentType === 'school') {
      return schoolStudentsData.find(student => student.id === studentId);
    }
  }

  getStudentSummaryByStudentId(studentType: string, studentId: number) {
    if (studentType === 'company') {
      return companyStudentsSummaryData.find(student => student.id === studentId);
    } else if (studentType === 'school') {
      return schoolStudentsSummaryData.find(student => student.id === studentId);
    }
  }

  getStudentAveragesByStudentId(studentId: number) {
    return studentsAverage.find(student => student.id === studentId);
  }

}

