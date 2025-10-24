import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from '../page/company-list/company-list.component';
import { CompanyDetailComponent } from '../page/company-detail/company-detail.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import { CompanyService } from '../services/company.servise';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HeaderComponent,
        CompanyItemComponent,
        CompanySortComponent,
        CompanyFilterComponent
    ],
    imports: [
        CommonModule, 
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        HeaderComponent,
        CompanyItemComponent,
        CompanySortComponent,
        CompanyFilterComponent
    ],
    providers: [
        CompanyService,
    ],
})
export class ComponentsModule {}