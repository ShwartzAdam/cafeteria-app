import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class MaterialModule { }
