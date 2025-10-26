import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import { CompanyService } from '../services/company.serviсe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent,
  ],
  imports: [CommonModule, BrowserModule, HttpClientModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent,
  ],
  providers: [CompanyService],
})
export class ComponentsModule {}
