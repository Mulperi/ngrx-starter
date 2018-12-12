import { NgModule } from '@angular/core';
import { Feature1RoutingModule } from './feature1-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { CommonModule } from '@angular/common';
import { containers } from './containers/';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...containers],
  imports: [
    CommonModule,
    Feature1RoutingModule,
    StoreModule.forFeature('feature1', reducers),
    SharedModule
  ],
  bootstrap: []
})
export class Feature1Module {}
