//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
//Components
import { CICPhonenumberComponent } from './public_api';
@NgModule({
  declarations: [CICPhonenumberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
  ],
  exports: [CICPhonenumberComponent],
})
export class CICPhonenumberModule {}
