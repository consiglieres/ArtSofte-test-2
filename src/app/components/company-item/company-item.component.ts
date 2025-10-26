import { Component, Input } from '@angular/core';
import { ICompany } from '../../interfaces/company.interface';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.serviсe';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss',
})
export class CompanyItemComponent {
  @Input() company!: ICompany;

  constructor(private _router: Router) {}

  public onCompanyClick(): void {
    this._router.navigate(['/detail', this.company.id]);
  }
}
