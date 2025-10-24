import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from '../../interfaces/company.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss'
})
export class CompanyItemComponent {
  @Input() company!: ICompany;

  constructor(private _router: Router){}

  get fullBusinessName(): string {
    return `${this.company.suffix} "${this.company.business_name}"`;
  }

  get safeLogo(): string {
    return this.company.logo || "https://via.placeholder.com/128x128/4A90E2/FFFFFF?text=Logo"
  }

  onCompanyClick(): void {
    this._router.navigate(['/detail', this.company.id])
  }

}
