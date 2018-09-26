import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Feature2TestContainerComponent } from './containers/test-container/test-container.component';

// import * as fromComponents from './components';
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: Feature2TestContainerComponent,
    pathMatch: 'full'
  }
  //   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule {}
