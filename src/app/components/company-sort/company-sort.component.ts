import { Component } from '@angular/core';
import {
  ISortOptions,
  SortableField,
  SortField,
} from '../../interfaces/sort-options.interface';
import { CompanyService } from '../../services/company.serviсe';
import { ICompany } from '../../interfaces/company.interface';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.scss',
})
export class CompanySortComponent {
  sortFields: SortField[] = [
    { value: 'business_name', label: 'По названию' },
    { value: 'type', label: 'По типу' },
    { value: 'industry', label: 'По виду деятельности' },
  ];

  currentSort: ISortOptions = {
    field: 'business_name',
    direction: 'asc',
  };

  constructor(private companyService: CompanyService) {}

  onSortFieldChange(field: keyof ICompany): void {
    this.currentSort.field = field as SortableField;
    this.companyService.setSortOptions(this.currentSort);
  }

  onSortDirectionChange(): void {
    this.currentSort.direction =
      this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    this.companyService.setSortOptions(this.currentSort);
  }

  getSortIcon(): string {
    return this.currentSort.direction === 'asc' ? '↑' : '↓';
  }

  getSortTitle(): string {
    return this.currentSort.direction === 'asc'
      ? 'По возрастанию'
      : 'По убыванию';
  }
}
