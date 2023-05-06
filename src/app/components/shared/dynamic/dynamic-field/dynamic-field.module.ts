import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './dynamic-field.component';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from './dynamic-radio/dynamic-radio.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicCheckboxComponent } from './dynamic-checkbox/dynamic-checkbox.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

const declarationComponents = [
  DynamicFieldComponent,
  DynamicSelectComponent,
  DynamicRadioComponent,
  DynamicInputComponent,
  DynamicCheckboxComponent,
];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: [declarationComponents],
  exports: [declarationComponents],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DynamicFieldComponent),
    },
  ],
})
export class DynamicFieldModule {}
