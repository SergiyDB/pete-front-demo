import { schoolsAverage } from 'src/mock/data_schools_average';

export class SchoolService {

  getSchoolInfoBySchoolId ( schoolId: number ) {
    console.log(schoolId);

  }

  getSchoolGradesSystemBySchoolId ( schoolId: number ) {
    console.log(schoolId);

  }

  getSchoolAverageIndicatorsBySchoolId(schoolId: number) {
    const result = schoolsAverage.find(elem => elem.id === schoolId);
    return result;
  }

  getSchoolEmployersBySchoolId ( schoolId: number ) {
    console.log(schoolId);

  }

  getSchoolGroupsBySchoolId ( schoolId: number ) {
    console.log(schoolId);

  }

  getSchoolStudentsBySchoolId ( schoolId: number ) {
    console.log(schoolId);

  }
}