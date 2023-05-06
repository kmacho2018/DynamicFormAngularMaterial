import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { DynamicFieldModule } from './dynamic-field/dynamic-field.module';

@NgModule({
  imports: [CommonModule, DynamicFormModule],
  exports: [DynamicFormModule],
})
export class DynamicModule {}
