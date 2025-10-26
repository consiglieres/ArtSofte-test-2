import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../../services/company.serviсe';
import { IFilterOptions } from '../../interfaces/filter-options.interface';
import { debounceTime } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.scss',
})
export class CompanyFilterComponent implements OnInit{
  private readonly _destroyRef = inject(DestroyRef)
  
  public filterForm: FormGroup;

  public readonly uniqueTypes$ = this._companyService.uniqueTypes$;
  public readonly uniqueIndustries$ = this._companyService.uniqueIndustries$;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _companyService: CompanyService
  ) {
    this.filterForm = this._fb.group({
      search: [''],
      type: [''],
      industry: [''],
    });
  }

  public ngOnInit() {
    this.filterForm.valueChanges
    .pipe(
      takeUntilDestroyed(this._destroyRef),
      debounceTime(300)
    ).subscribe((filters: IFilterOptions) => {
      this._companyService.setFilterOptions(filters);
    });

  }

  public resetFilters(): void {
    this.filterForm.patchValue({
      search: '',
      type: '',
      industry: '',
    });
    this._companyService.resetFilters();
  }
}

