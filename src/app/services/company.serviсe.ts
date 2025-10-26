import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  map,
  Observable,
  take,
} from 'rxjs';
import { ICompany } from '../interfaces/company.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';
import { ISortOptions } from '../interfaces/sort-options.interface';

@Injectable()
export class CompanyService {
  private apiUrl: string = 'https://faker-api.milki.space/companies';

  private companiesSubject: BehaviorSubject<ICompany[]> = new BehaviorSubject<
    ICompany[]
  >([]);
  private sortOptionsSubject: BehaviorSubject<ISortOptions> =
    new BehaviorSubject<ISortOptions>({
      field: 'business_name',
      direction: 'asc',
    });
  private filterOptionsSubject: BehaviorSubject<IFilterOptions> =
    new BehaviorSubject<IFilterOptions>({});

  public companies$: Observable<ICompany[]> = combineLatest([
    this.companiesSubject.asObservable(),
    this.sortOptionsSubject.asObservable(),
    this.filterOptionsSubject.asObservable().pipe(debounceTime(300)),
  ]).pipe(
    map(([companies, sortOptions, filterOptions]) => {
      const filteredCompanies = companies.filter((company) =>
        this.filterCompany(company, filterOptions)
      );

      return filteredCompanies.sort((a, b) =>
        this.sortCompanies(a, b, sortOptions)
      );
    })
  );

  public uniqueTypes$: Observable<string[]> = this.companiesSubject.pipe(
    map((companies) =>
      [...new Set(companies.map((company) => company.type))].sort()
    )
  );

  public uniqueIndustries$: Observable<string[]> = this.companiesSubject.pipe(
    map((companies) =>
      [...new Set(companies.map((company) => company.industry))].sort()
    )
  );

  constructor(private _httpClient: HttpClient) {}

  public getCompanies(): void {
    this._httpClient
      .get<{ data: ICompany[] }>(this.apiUrl)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.companiesSubject.next(response.data);
        },
        error: (error) => {
          console.error('Ошибка загрузки компаний:', error);
        },
      });
  }

  public getCompanyById(companyId: number): Observable<ICompany> {
    return this._httpClient.get<ICompany>(`${this.apiUrl}/${companyId}`);
  }

  public setSortOptions(sortOptions: ISortOptions): void {
    this.sortOptionsSubject.next(sortOptions);
  }

  public setFilterOptions(filterOptions: IFilterOptions): void {
    this.filterOptionsSubject.next(filterOptions);
  }

  public resetFilters(): void {
    this.filterOptionsSubject.next({});
  }

  private sortCompanies(
    a: ICompany,
    b: ICompany,
    sortOptions: ISortOptions
  ): number {
    const fieldA: string = String(a[sortOptions.field]).toLowerCase();
    const fieldB: string = String(b[sortOptions.field]).toLowerCase();

    if (fieldA < fieldB) {
      return sortOptions.direction === 'asc' ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return sortOptions.direction === 'asc' ? 1 : -1;
    }
    return 0;
  }

  private filterCompany(company: ICompany, filters: IFilterOptions): boolean {
    if (!filters.search && !filters.type && !filters.industry) {
      return true;
    }

    const matchesSearch: boolean =
      !filters.search ||
      company.business_name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
    const matchesType: boolean = !filters.type || company.type === filters.type;
    const matchesIndustry: boolean =
      !filters.industry || company.industry === filters.industry;
    return matchesSearch && matchesType && matchesIndustry;
  }
}
