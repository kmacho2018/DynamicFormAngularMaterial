import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicModule } from './dynamic/dynamic.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
const declarationComponents = [DashboardComponent, NavigationComponent];

@NgModule({
  imports: [CommonModule, MaterialModule, DynamicModule],
  exports: [DynamicModule, declarationComponents],
  declarations: [declarationComponents],
})
export class SharedModule {}
