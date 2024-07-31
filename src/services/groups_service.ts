import { Groups } from 'src/mock/data_groups';
// import { UserRole } from 'src/enums/userRoles';
import {
  // getState,
  // getUserId,
  // getUserStatus,
} from 'src/store/appState';

import type { Group } from 'src/interfaces/app_interfaces';

export class GroupsService {
  getGroupsListByCompanyId(companyId: number): Group[] {
    // const state = getState();
    // const userStatus = getUserStatus();

    // if (!userStatus || state.user.user_role !== UserRole.ADMIN) {
    //   throw new Error('User is not authorized to perform this action');
    // }

    return Groups.filter((group) => group.company_id === companyId);
  }

  getGroupsListBySchoolId(schoolId: number): Group[] {
    // const state = getState();
    // const userStatus = getUserStatus();

    // if (!userStatus || state.user.user_role !== UserRole.ADMIN) {
    //   throw new Error('User is not authorized to perform this action');
    // }

    return Groups.filter((group) => group.school_id === schoolId);
  }

  // getGroupsListByCompanyIdAndTeacherId() {

  // }

  // getGroupsListBySchoolIdAndTeacherId() {

  // }

  // getGroupsListByTutorId() {

  // }
}
