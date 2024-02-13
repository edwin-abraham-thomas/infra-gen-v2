import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsComponent } from './aws/aws.component';
import { PocRoutingModule } from './poc-routing.module';



@NgModule({
  declarations: [
    AwsComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule
  ]
})
export class PocModule { }
