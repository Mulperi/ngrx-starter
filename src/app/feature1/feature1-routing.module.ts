import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Feature1TestContainerComponent } from './containers/test-container/test-container.component';

// import * as fromComponents from './components';
// import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: Feature1TestContainerComponent,
    pathMatch: 'full'
  }
  //   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule {}
