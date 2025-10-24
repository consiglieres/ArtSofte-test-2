import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.servise';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss'
})
export class CompanyItemComponent implements OnInit{
  constructor(private _companyService: CompanyService){}
  
  ngOnInit(): void {
    this._companyService.getCompanies()
  }
}
