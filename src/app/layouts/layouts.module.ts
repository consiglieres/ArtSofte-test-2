import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout-component/layout-component.component';    
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/component.module';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule
    ],
    exports: [],
    providers: [],
})
export class LayoutsModule {}