import type { CEFRLevel } from 'src/interfaces/app_interfaces';
import {
  CefrLabel,
  CefrValue
} from 'src/enums/cefrLevels';

export const CEFRLevels: CEFRLevel[] = [
  { id: 'cefr_a0',      label: CefrLabel.A0,      value: CefrValue.A0       },
  { id: 'cefr_a1',      label: CefrLabel.A1,      value: CefrValue.A1       },
  { id: 'cefr_a1_plus', label: CefrLabel.A1_PLUS, value: CefrValue.A1_PLUS  },
  { id: 'cefr_a2',      label: CefrLabel.A2,      value: CefrValue.A2       },
  { id: 'cefr_a2_plus', label: CefrLabel.A2_PLUS, value: CefrValue.A2_PLUS  },
  { id: 'cefr_b1',      label: CefrLabel.B1,      value: CefrValue.B1       },
  { id: 'cefr_b1_plus', label: CefrLabel.B1_PLUS, value: CefrValue.B1_PLUS  },
  { id: 'cefr_b2',      label: CefrLabel.B2,      value: CefrValue.B2       },
  { id: 'cefr_b2_plus', label: CefrLabel.B2_PLUS, value: CefrValue.B2_PLUS  },
  { id: 'cefr_c1',      label: CefrLabel.C1,      value: CefrValue.C1       },
  { id: 'cefr_c1_plus', label: CefrLabel.C1_PLUS, value: CefrValue.C1_PLUS  },
];