import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessService } from './services/data-access.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DataAccessService
  ]
})
export class SharedModule { }
