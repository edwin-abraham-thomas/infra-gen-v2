import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsComponent } from './aws/aws.component';
import { FsComponent } from './fs/fs.component';

const routes: Routes = [
    {
        path: 'aws',
        component: AwsComponent
    },
    {
      path: 'fs',
      component: FsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule { }
