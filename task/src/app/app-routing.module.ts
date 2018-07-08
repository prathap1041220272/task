import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: '' ,redirectTo:'/details',pathMatch:'full' },
  { path: 'details', component: DetailsComponent },
  { path: 'view', component: ViewDetailsComponent },
  { path: '**',redirectTo:'/details',pathMatch:'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
