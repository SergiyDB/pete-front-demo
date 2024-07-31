import type {
  // AverageIndicatorData,
  SimpleIndicatorData,
} from 'src/interfaces/app_interfaces';

import {AverageIndicatorLabel} from 'src/enums/averageIndicators';




export const schoolGradeAverageIndicatorData: Record<string, object> = {
  'ave-cefr': {
    name: 'AVE_CEFR',
    title: AverageIndicatorLabel.AVE_CEFR,
    value: 'B2',
    additionalText: 'B2 Students',
    additionalValue: 322,
  },
  'ave-fluency': {
    name: 'AVE_FLUENCY',
    title: AverageIndicatorLabel.AVE_FLUENCY,
    value: 87,
    unit: '%',
    additionalText: '87% Fluency Students',
    additionalValue: 276,
  },
  'ave-time-spent':{
    name: 'AVE_TIME_SPENT',
    title: AverageIndicatorLabel.AVE_TIME_SPENT,
    value: 1.2,
    unit: 'hours',
    additionalText: 'This week',
    additionalValue: 0.5,
    additionalUnit: 'hours',
  },
  'ave-streak': {
    name: 'AVE_STREAK',
    title: AverageIndicatorLabel.AVE_STREAK,
    value: 3,
    unit: 'days',
    additionalText: 'This week',
    additionalValue: 1,
    additionalUnit: 'days',
  },
};

export const schoolOverviewSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: 214 },
  'bottom-30':          { title: 'Bottom 30%',    value: 75 },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: 4 },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: 3 },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: 8 },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: 6 },
};

export const schoolGradeSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: 220 },
  'bottom-30':          { title: 'Bottom 30%',    value: 80 },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: 5 },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: 4 },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: 9 },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: 7 },
};

export const schoolGradeProgressTrendLineData = {

  'weekly': {
    labels: [ 'May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2', ],
    data:   [ 20, 25, 30, 22, 18, 24, 27, 29, 31, ],
  },
  'monthly': {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
    data:   [ 65, 59, 80, 81, 56, 55, 40, 22, 67, 85, 17, 71, ],
  },
  'quarterly': {
    labels: [ 'Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec', ],
    data:   [ 204, 213, 198, 219, ],
  },

}

export const schoolStudentsLeaderboardData = [
  {
    id        : 1,
    student   : 'Andrés Cataño',
    cefr      : 'C1',
    fluency   : 94,
    timeSpent : 72,
    streak    : 14,
    teacher   : 'Anthony Bush',
    teacherId : 1,
  },
  {
    id        : 2,
    student   : 'Maria Garcia',
    cefr      : 'B2',
    fluency   : 88,
    timeSpent : 65,
    streak    : 10,
    teacher   : 'Sarah Johnson',
    teacherId : 2,
  },
  {
    id        : 3,
    student   : 'John Doe',
    cefr      : 'B1',
    fluency   : 76,
    timeSpent : 50,
    streak    : 7,
    teacher   : 'Michael Lee',
    teacherId : 3,
  },
  {
    id        : 4,
    student   : 'Jane Smith',
    cefr      : 'A2',
    fluency   : 65,
    timeSpent : 40,
    streak    : 5,
    teacher   : 'Emma Brown',
    teacherId : 4,
  },
  {
    id        : 5,
    student   : 'Pedro Alvarez',
    cefr      : 'C2',
    fluency   : 98,
    timeSpent : 80,
    streak    : 20,
    teacher   : 'David Wilson',
    teacherId : 5,
  },
  {
    id        : 6,
    student   : 'Sophia Martinez',
    cefr      : 'A1',
    fluency   : 55,
    timeSpent : 35,
    streak    : 4,
    teacher   : 'Elizabeth Taylor',
    teacherId : 6,
  },
  {
    id        : 7,
    student   : 'Liam Johnson',
    cefr      : 'B1',
    fluency   : 74,
    timeSpent : 52,
    streak    : 8,
    teacher   : 'Michael Lee',
    teacherId : 3,
  },
  {
    id        : 8,
    student   : 'Olivia Brown',
    cefr      : 'C2',
    fluency   : 97,
    timeSpent : 78,
    streak    : 18,
    teacher   : 'Emily Davis',
    teacherId : 7,
  },
  {
    id        : 9,
    student   : 'Noah Williams',
    cefr      : 'B2',
    fluency   : 85,
    timeSpent : 60,
    streak    : 12,
    teacher   : 'Christopher Moore',
    teacherId : 8,
  },
  {
    id        : 10,
    student   : 'Ava Jones',
    cefr      : 'C1',
    fluency   : 91,
    timeSpent : 70,
    streak    : 16,
    teacher   : 'Daniel Taylor',
    teacherId : 9,
  },
  {
    id        : 11,
    student   : 'Isabella Garcia',
    cefr      : 'A2',
    fluency   : 62,
    timeSpent : 42,
    streak    : 6,
    teacher   : 'Anthony Bush',
    teacherId : 1,
  },
  {
    id        : 12,
    student   : 'Ethan Thomas',
    cefr      : 'B2',
    fluency   : 83,
    timeSpent : 58,
    streak    : 9,
    teacher   : 'Sarah Johnson',
    teacherId : 2,
  },
  {
    id        : 13,
    student   : 'Mia White',
    cefr      : 'C1',
    fluency   : 90,
    timeSpent : 68,
    streak    : 13,
    teacher   : 'David Wilson',
    teacherId : 5,
  },
  {
    id        : 14,
    student   : 'Lucas Harris',
    cefr      : 'B1',
    fluency   : 78,
    timeSpent : 55,
    streak    : 11,
    teacher   : 'Elizabeth Taylor',
    teacherId : 6,
  },
  {
    id        : 15,
    student   : 'Amelia Martin',
    cefr      : 'A2',
    fluency   : 60,
    timeSpent : 38,
    streak    : 6,
    teacher   : 'Emily Davis',
    teacherId : 7,
  },
];

export const teacherSummaryData = [
  {
    id: '1',
    name: 'Anthony Bush',
    imageSrc: 'src/assets/images/avatars/male-20.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [23, 28, 33, 26, 21, 27, 30, 32, 35],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [68, 63, 85, 89, 73, 71, 59, 42, 77, 92, 29, 79],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [216, 233, 207, 239],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [23, 28, 33, 26, 21, 27, 30, 32, 35],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [68, 63, 85, 89, 73, 71, 59, 42, 77, 92, 29, 79],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [216, 233, 207, 239],
      },
    },
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    imageSrc: 'src/assets/images/avatars/female-20.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [20, 25, 30, 24, 19, 25, 28, 30, 33],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [70, 65, 87, 91, 75, 73, 61, 44, 79, 94, 31, 81],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [220, 237, 211, 243],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [22, 27, 32, 25, 20, 26, 29, 31, 34],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [72, 67, 89, 93, 77, 75, 63, 46, 81, 96, 33, 83],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [224, 241, 215, 247],
      },
    },
  },
  {
    id: '3',
    name: 'Michael Lee',
    imageSrc: 'src/assets/images/avatars/male-19.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [21, 26, 31, 24, 18, 24, 27, 29, 32],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [69, 64, 86, 90, 74, 72, 60, 43, 78, 93, 30, 80],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [217, 234, 208, 240],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [24, 29, 34, 27, 22, 28, 31, 33, 36],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [73, 68, 90, 94, 78, 76, 64, 47, 82, 97, 34, 84],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [225, 242, 216, 248],
      },
    },
  },
  {
    id: '4',
    name: 'Emma Brown',
    imageSrc: 'src/assets/images/avatars/female-19.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
  },
  {
    id: '5',
    name: 'David Wilson',
    imageSrc: 'src/assets/images/avatars/male-18.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [19, 24, 29, 22, 17, 23, 26, 28, 31],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [67, 62, 84, 88, 72, 70, 58, 41, 76, 91, 28, 78],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [215, 232, 206, 238],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [25, 30, 35, 28, 23, 29, 32, 34, 37],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [74, 69, 91, 95, 79, 77, 65, 48, 83, 98, 35, 85],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [226, 243, 217, 249],
      },
    },
  },
  {
    id: '6',
    name: 'Elizabeth Taylor',
    imageSrc: 'src/assets/images/avatars/female-18.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [22, 27, 32, 25, 20, 26, 29, 31, 34],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [71, 66, 88, 92, 76, 74, 62, 45, 80, 95, 32, 82],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [221, 238, 212, 244],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [21, 26, 31, 24, 19, 25, 28, 30, 33],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [70, 65, 87, 91, 75, 73, 61, 44, 79, 94, 31, 81],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [220, 237, 211, 243],
      },
    },
  },
  {
    id: '7',
    name: 'Emily Davis',
    imageSrc: 'src/assets/images/avatars/female-17.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [23, 28, 33, 26, 21, 27, 30, 32, 35],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [68, 63, 85, 89, 73, 71, 59, 42, 77, 92, 29, 79],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [216, 233, 207, 239],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [22, 27, 32, 25, 20, 26, 29, 31, 34],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [67, 62, 84, 88, 72, 70, 58, 41, 76, 91, 28, 78],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [215, 232, 206, 238],
      },
    },
  },
  {
    id: '8',
    name: 'Christopher Moore',
    imageSrc: 'src/assets/images/avatars/male-17.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [24, 29, 34, 27, 22, 28, 31, 33, 36],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [69, 64, 86, 90, 74, 72, 60, 43, 78, 93, 30, 80],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [217, 234, 208, 240],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [25, 30, 35, 28, 23, 29, 32, 34, 37],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [74, 69, 91, 95, 79, 77, 65, 48, 83, 98, 35, 85],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [226, 243, 217, 249],
      },
    },
  },

  {
    id: '9',
    name: 'Daniel Taylor',
    imageSrc: 'src/assets/images/avatars/male-16.jpg',
    averageIndicatorsData: {
      'ave-cefr': {
        title: 'Ave CEFR',
        value: 'B2',
        additionalText: 'B2 Students',
        additionalValue: 322,
      },
      'ave-fluency': {
        title: 'Ave Fluency',
        value: 87,
        unit: '%',
        additionalText: '87% Fluency Students',
        additionalValue: 276,
      },
      'ave-time-spent': {
        title: 'Ave Time Spent',
        value: 1.2,
        unit: 'hours',
        additionalText: 'This week',
        additionalValue: 0.5,
        additionalUnit: 'hours',
      },
      'ave-streak': {
        title: 'Ave Streak',
        value: 3,
        unit: 'days',
        additionalText: 'This week',
        additionalValue: 1,
        additionalUnit: 'days',
      },
    },
    progressTrendLineDataXY: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [17, 22, 27, 20, 15, 21, 24, 26, 29],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [64, 59, 81, 85, 69, 67, 55, 38, 73, 88, 25, 75],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [212, 229, 203, 235],
      },
    },
    progressTrendLineDataYZ: {
      'weekly': {
        labels: ['May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2'],
        data: [27, 32, 37, 30, 25, 31, 34, 36, 39],
      },
      'monthly': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [76, 71, 93, 97, 81, 79, 67, 50, 85, 100, 37, 87],
      },
      'quarterly': {
        labels: ['Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec'],
        data: [228, 245, 219, 251],
      },
    },
  },

];





export const schoolTeamMembersList = [
  {
    id    : 1,
    avatar: 'src/assets/images/avatars/female-10.jpg',
    name  : 'Nadia Mcknight',
    email : 'nadiamcknight@mail.com',
    phone : '+1-943-511-2203',
    title : 'Client Relations Manager'
  },
  {
    id    : 2,
    avatar: 'src/assets/images/avatars/male-19.jpg',
    name  : 'Best Blackburn',
    email : 'blackburn.best@beadzza.me',
    phone : '+1-814-498-3701',
    title : 'Educational Quality Control Manager'
  },
  {
    id    : 3,
    avatar: 'src/assets/images/avatars/male-14.jpg',
    name  : 'Duncan Carver',
    email : 'duncancarver@mail.info',
    phone : '+1-968-547-2111',
    title : 'Linguist'
  },
  {
    id    : 4,
    avatar: 'src/assets/images/avatars/male-01.jpg',
    name  : 'Martin Richards',
    email : 'martinrichards@mail.biz',
    phone : '+1-902-500-2668',
    title : 'English Teacher'
  },
  {
    id    : 5,
    avatar: 'src/assets/images/avatars/female-20.jpg',
    name  : 'Candice Munoz',
    email : 'candicemunoz@mail.co.uk',
    phone : '+1-838-562-2769',
    title : 'Lead Designer'
  },
  {
    id    : 6,
    avatar: 'src/assets/images/avatars/female-01.jpg',
    name  : 'Vickie Mosley',
    email : 'vickiemosley@mail.net',
    phone : '+1-939-555-3054',
    title : 'Designer'
  },
  {
    id    : 7,
    avatar: 'src/assets/images/avatars/female-02.jpg',
    name  : 'Tina Harris',
    email : 'tinaharris@mail.ca',
    phone : '+1-933-464-2431',
    title : 'Designer'
  },
  {
    id    : 8,
    avatar: 'src/assets/images/avatars/male-02.jpg',
    name  : 'Holt Manning',
    email : 'holtmanning@mail.org',
    phone : '+1-822-531-2600',
    title : 'Marketing Manager'
  },
  {
    id    : 9,
    avatar: 'src/assets/images/avatars/female-03.jpg',
    name  : 'Misty Ramsey',
    email : 'mistyramsey@mail.us',
    phone : '+1-990-457-2106',
    title : 'Consultant'
  }
];


export const companyOverviewAverageIndicatorData: Record<string, object> = {
  'ave-cefr': {
    name: 'AVE_CEFR',
    title: AverageIndicatorLabel.AVE_CEFR,
    value: 'B1',
    additionalText: 'B1 Students',
    additionalValue: 146,
  },
  'ave-fluency': {
    name: 'AVE_FLUENCY',
    title: AverageIndicatorLabel.AVE_FLUENCY,
    value: 74,
    unit: '%',
    additionalText: '74% Fluency Students',
    additionalValue: 302,
  },
  'ave-time-spent':{
    name: 'AVE_TIME_SPENT',
    title: AverageIndicatorLabel.AVE_TIME_SPENT,
    value: 3.5,
    unit: 'hours',
    additionalText: 'This week',
    additionalValue: 5.0,
    additionalUnit: 'hours',
  },
  'ave-streak': {
    name: 'AVE_STREAK',
    title: AverageIndicatorLabel.AVE_STREAK,
    value: 10,
    unit: 'days',
    additionalText: 'This week',
    additionalValue: 4,
    additionalUnit: 'days',
  },
};


export const companyLevelAverageIndicatorData: Record<string, object> = {
  'ave-cefr': {
    name: 'AVE_CEFR',
    title: AverageIndicatorLabel.AVE_CEFR,
    value: 'C1',
    additionalText: 'C1 Students',
    additionalValue: 350,
  },
  'ave-fluency': {
    name: 'AVE_FLUENCY',
    title: AverageIndicatorLabel.AVE_FLUENCY,
    value: 90,
    unit: '%',
    additionalText: '90% Fluency Students',
    additionalValue: 290,
  },
  'ave-time-spent': {
    name: 'AVE_TIME_SPENT',
    title: AverageIndicatorLabel.AVE_TIME_SPENT,
    value: 1.5,
    unit: 'hours',
    additionalText: 'This week',
    additionalValue: 0.8,
    additionalUnit: 'hours',
  },
  'ave-streak': {
    name: 'AVE_STREAK',
    title: AverageIndicatorLabel.AVE_STREAK,
    value: 4,
    unit: 'days',
    additionalText: 'This week',
    additionalValue: 2,
    additionalUnit: 'days',
  },
};

export const companyOverviewSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: 230 },
  'bottom-30':          { title: 'Bottom 30%',    value: 85 },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: 6 },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: 5 },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: 10 },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: 8 },
};

export const companyLevelSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: 240 },
  'bottom-30':          { title: 'Bottom 30%',    value: 90 },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: 7 },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: 6 },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: 11 },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: 9 },
};

export const companyLevelProgressTrendLineData = {
  'weekly': {
    labels: [ 'May 1-7', 'May 8-14', 'May 15-21', 'May 22-28', 'May 29-Jun 4', 'Jun 5-11', 'Jun 12-18', 'Jun 19-25', 'Jun 26-Jul 2', ],
    data:   [ 22, 28, 34, 26, 20, 29, 32, 33, 35, ],
  },
  'monthly': {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
    data:   [ 70, 64, 85, 86, 61, 60, 45, 27, 72, 90, 22, 76, ],
  },
  'quarterly': {
    labels: [ 'Q1 Jan-Mar', 'Q2 Apr-Jun', 'Q3 Jul-Sep', 'Q4 Oct-Dec', ],
    data:   [ 210, 220, 205, 225, ],
  },
};


export const companyTeamMembersList = [
  {
    id    : '3d74a3e5-8128-4c9e-b4ac-ec2d9ec88d14',
    avatar: 'src/assets/images/avatars/female-12.jpg',
    name  : 'Emily Collins',
    email : 'emily.collins@mail.com',
    phone : '+1-943-521-2304',
    title : 'Client Relations Manager'
  },
  {
    id    : '57b4875d-c4a5-4983-bc96-04c4431e1637',
    avatar: 'src/assets/images/avatars/male-18.jpg',
    name  : 'James Anderson',
    email : 'james.anderson@eduquality.me',
    phone : '+1-814-478-3752',
    title : 'Educational Quality Control Manager'
  },
  {
    id    : '9cc2f627-673a-47ca-9c78-3f94219ec9bf',
    avatar: 'src/assets/images/avatars/male-17.jpg',
    name  : 'Robert Martinez',
    email : 'robert.martinez@linguist.info',
    phone : '+1-968-547-2155',
    title : 'Linguist'
  },
  {
    id    : 'd439f21e-1d74-49d5-8dab-3fc5805e3bfb',
    avatar: 'src/assets/images/avatars/male-03.jpg',
    name  : 'Michael Scott',
    email : 'michael.scott@mail.biz',
    phone : '+1-902-500-2668',
    title : 'English Teacher'
  },
  {
    id    : '1b9df427-631a-4b93-aadc-111fa3e8395d',
    avatar: 'src/assets/images/avatars/female-18.jpg',
    name  : 'Sophia Green',
    email : 'sophia.green@mail.co.uk',
    phone : '+1-838-562-2769',
    title : 'Lead Designer'
  },
  {
    id    : 'c5d1345b-757b-40c0-8943-d30e0644eacd',
    avatar: 'src/assets/images/avatars/female-02.jpg',
    name  : 'Olivia Brown',
    email : 'olivia.brown@mail.net',
    phone : '+1-939-555-3054',
    title : 'Designer'
  },
  {
    id    : 'd9329cdf-48b5-46a2-9d95-f1be7581d346',
    avatar: 'src/assets/images/avatars/female-04.jpg',
    name  : 'Isabella Davis',
    email : 'isabella.davis@mail.ca',
    phone : '+1-933-464-2431',
    title : 'Designer'
  },
  {
    id    : 'e105fa89-98fc-436c-9ba6-7dfe43fe684e',
    avatar: 'src/assets/images/avatars/male-05.jpg',
    name  : 'Liam Wilson',
    email : 'liam.wilson@mail.org',
    phone : '+1-822-531-2600',
    title : 'Marketing Manager'
  },
  {
    id    : '9b80fe3d-d7cc-4b3d-983e-669173e48e38',
    avatar: 'src/assets/images/avatars/female-06.jpg',
    name  : 'Ava Lee',
    email : 'ava.lee@mail.us',
    phone : '+1-990-457-2106',
    title : 'Consultant'
  }
];











