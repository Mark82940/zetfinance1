export interface ComparisonRow {
  label: string;
  malta: string | boolean;
  greece: string | boolean;
  cyprus: string | boolean;
  caribbean: string | boolean;
}

export interface EligibilityResult {
  qualified: boolean;
  countries: string[];
  message: string;
}

export enum WizardStep {
  BUDGET = 1,
  CITIZENSHIP = 2,
  RESULT = 3,
}