import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout-component/layout-component.component';
import { CompanyListComponent } from './page/company-list/company-list.component';
import { CompanyDetailComponent } from './page/company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './page/company-yandex-map/company-yandex-map.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: '', 
        component: CompanyListComponent
      },
      {
        path: 'list',
        component: CompanyListComponent
      },
      {
        path: 'detail/:id',
        component: CompanyDetailComponent
      },
      {
        path: 'map',
        component: CompanyYandexMapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
