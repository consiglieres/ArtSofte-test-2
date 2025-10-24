import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/component.module';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { CompanyService } from '../services/company.servise';

@NgModule({
    declarations: [
        CompanyDetailComponent,
        CompanyListComponent,
        CompanyYandexMapComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        ComponentsModule,
    ],
    exports: [],
    providers: [
        CompanyService
    ],
})
export class PagesModule {}