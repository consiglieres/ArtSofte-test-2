import { Component, OnInit } from '@angular/core';
import { ICompany } from '../../interfaces/company.interface';
import { CompanyService } from '../../services/company.serviсe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent implements OnInit {
  public companies$: Observable<ICompany[]>;

  constructor(private _companiesService: CompanyService) {
    this.companies$ = this._companiesService.companies$;
  }

  ngOnInit(): void {
    this._companiesService.getCompanies();
  }

  trackByCompanyId(index: number, company: ICompany): number {
    return company.id;
  }
}
