import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.servise';
import { ActivatedRoute } from '@angular/router';
import { ICompany } from '../../interfaces/company.interface';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})
export class CompanyDetailComponent implements OnInit{
  company!: ICompany;

  constructor(
    private _route: ActivatedRoute,
    private _companyService: CompanyService
  ){}

  ngOnInit(): void {
    const companyId = this._route.snapshot.paramMap.get("id")

    if (companyId) {
      this._companyService.getCompanyById(+companyId).subscribe({
        next: (company) => {
          this.company = company;
        },
        error: (error) => {
          console.error('Ошибка загрузки компании:', error);
        }
      });
    }
  }
}
