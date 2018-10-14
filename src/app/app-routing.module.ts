import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: './feature1/feature1.module#Feature1Module'
  },
  {
    path: 'feature2',
    loadChildren: './feature2/feature2.module#Feature2Module'
  },
  {
    path: '',
    redirectTo: '/feature1',
    pathMatch: 'full'
  }
  //   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
