import { companiesAverage } from 'src/mock/data_companies_average';

export class CompanyService {

  getCompanyInfoByCompanyId ( companyId: number ) {
    console.log(companyId);

  }

  getCompanyLevelsSystemByCompanyId ( companyId: number ) {
    console.log(companyId);

  }

  getCompanyAverageIndicatorsByCompanyId(companyId: number) {
    const result = companiesAverage.find(elem => elem.id === companyId);
    return result;
  }

  getCompanyEmployersByCompanyId ( companyId: number ) {
    console.log(companyId);

  }

  getCompanyGroupsByCompanyId ( companyId: number ) {
    console.log(companyId);

  }

  getCompanyStudentsByCompanyId ( companyId: number ) {
    console.log(companyId);

  }

}