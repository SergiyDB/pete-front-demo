import type {
  SimpleIndicatorData,
} from 'src/interfaces/app_interfaces';

import { getRandomInt } from 'src/shared/generateRandonInts';

export const companyOverviewSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: getRandomInt(1, 300) },
  'bottom-30':          { title: 'Bottom 30%',    value: getRandomInt(1, 300) },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: getRandomInt(1, 300) },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: getRandomInt(1, 300) },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: getRandomInt(1, 300) },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: getRandomInt(1, 300) },
};

export const companyLevelSimpleIndicatorsData: Record<string, SimpleIndicatorData> = {
  'top-10':             { title: 'Top 10%',       value: getRandomInt(1, 300) },
  'bottom-30':          { title: 'Bottom 30%',    value: getRandomInt(1, 300) },
  'fluency-87%-over':   { title: 'Fluency 87%+',  value: getRandomInt(1, 300) },
  'fluency-92%-over':   { title: 'Fluency 92%+',  value: getRandomInt(1, 300) },
  'fluency-77%-below':  { title: 'Fluency 77%-',  value: getRandomInt(1, 300) },
  'fluency-57%-below':  { title: 'Fluency 57%-',  value: getRandomInt(1, 300) },
};
