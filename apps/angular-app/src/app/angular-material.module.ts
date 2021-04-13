import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [CommonModule],
  exports: [MatButtonModule, MatSelectModule, MatFormFieldModule],
})
export class AngularMaterialModule {}
