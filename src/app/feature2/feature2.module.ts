import { NgModule } from '@angular/core';
import { Feature2RoutingModule } from './feature2-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [],
  imports: [
    Feature2RoutingModule,
    StoreModule.forFeature('feature2', reducers)
  ],
  bootstrap: []
})
export class Feature2Module {}
