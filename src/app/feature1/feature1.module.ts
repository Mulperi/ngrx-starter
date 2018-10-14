import { NgModule } from '@angular/core';
import { Feature1RoutingModule } from './feature1-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [],
  imports: [
    Feature1RoutingModule,
    StoreModule.forFeature('feature1', reducers)
  ],
  bootstrap: []
})
export class Feature1Module {}
