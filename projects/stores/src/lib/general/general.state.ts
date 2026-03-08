export interface GeneralState {
  multiplier?: number;
}

export const initialGeneralState: GeneralState = {
  multiplier: 1
};

export interface GeneralStore {
  general: GeneralState;
}
