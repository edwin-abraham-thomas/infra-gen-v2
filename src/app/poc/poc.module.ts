import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwsComponent } from './aws/aws.component';
import { PocRoutingModule } from './poc-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FsComponent } from './fs/fs.component';



@NgModule({
  declarations: [
    AwsComponent,
    FsComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
    SharedModule
  ]
})
export class PocModule { }
