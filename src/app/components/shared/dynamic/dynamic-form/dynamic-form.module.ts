import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicErrorComponent } from './dynamic-error/dynamic-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldModule } from '../dynamic-field/dynamic-field.module';

const declarationComponents = [DynamicFormComponent, DynamicErrorComponent];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, DynamicFieldModule],
  declarations: [declarationComponents],
  exports: [declarationComponents],
})
export class DynamicFormModule {}
