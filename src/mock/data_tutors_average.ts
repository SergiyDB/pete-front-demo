import type { Average } from 'src/interfaces/app_interfaces';
import {
  AverageIndicatorLabel,
  AverageIndicatorUnit,
  AverageIndicatorColor,
  AverageIndicatorColorHEX
} from 'src/enums/averageIndicators';
import { CEFRLevels } from 'src/constants/cefrLevels';

export const tutorsAverage: { id: number; averages: Average[] }[] = [
  { id: 1, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_b2') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 70,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 55,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 12,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 2, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_a0') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 60,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 40,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 18,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 3, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_c1_plus') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 85,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 50,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 20,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 4, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_b2_plus') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 95,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 45,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 25,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 5, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_a1') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 70,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 20,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 30,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 6, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_c1') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 80,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 30,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 22,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 7, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_a2_plus') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 65,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 50,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 18,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 8, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_b1') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 55,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 25,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 8,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 9, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_a2') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 75,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 60,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 10,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 10, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_b2_plus') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 85,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 55,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 15,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 11, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_c1_plus') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 90,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 65,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 12,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 12, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_b1_plus') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 75,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 40,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 8,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 13, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_b2') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 85,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 60,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 25,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 14, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_c1') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 95,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 35,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 20,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
  { id: 15, averages: [
    {
      indicator: 'AVE_CEFR',
      name: AverageIndicatorLabel.AVE_CEFR,
      value: CEFRLevels.find(level => level.id === 'cefr_a2_plus') ?? { id: 'unknown', label: 'Unknown', value: 0 },
      unit: AverageIndicatorUnit.AVE_CEFR,
      color: AverageIndicatorColor.AVE_CEFR,
      colorHEX: AverageIndicatorColorHEX.AVE_CEFR,
    },
    {
      indicator: 'AVE_FLUENCY',
      name: AverageIndicatorLabel.AVE_FLUENCY,
      value: 80,
      unit: AverageIndicatorUnit.AVE_FLUENCY,
      color: AverageIndicatorColor.AVE_FLUENCY,
      colorHEX: AverageIndicatorColorHEX.AVE_FLUENCY,
    },
    {
      indicator: 'AVE_TIME_SPENT',
      name: AverageIndicatorLabel.AVE_TIME_SPENT,
      value: 45,
      unit: AverageIndicatorUnit.AVE_TIME_SPENT,
      color: AverageIndicatorColor.AVE_TIME_SPENT,
      colorHEX: AverageIndicatorColorHEX.AVE_TIME_SPENT,
    },
    {
      indicator: 'AVE_STREAK',
      name: AverageIndicatorLabel.AVE_STREAK,
      value: 12,
      unit: AverageIndicatorUnit.AVE_STREAK,
      color: AverageIndicatorColor.AVE_STREAK,
      colorHEX: AverageIndicatorColorHEX.AVE_STREAK,
    },
  ]},
];