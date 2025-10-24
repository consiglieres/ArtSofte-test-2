import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import { CompanyService } from '../services/company.servise';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        CompanyListComponent,
        CompanyDetailComponent,
        CompanyYandexMapComponent,
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
        CompanyListComponent
    ],
    providers: [
        CompanyService
    ],
})
export class ComponentsModule {}