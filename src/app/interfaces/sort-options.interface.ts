import { ICompany } from './company.interface';

export type SortableField = 'business_name' | 'type' | 'industry';

export interface ISortOptions {
  field: SortableField;
  direction: 'asc' | 'desc';
}

export interface SortField {
  value: keyof ICompany;
  label: string;
}
