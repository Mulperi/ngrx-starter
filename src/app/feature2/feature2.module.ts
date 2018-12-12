import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2RoutingModule } from './feature2-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { containers } from './containers/';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...containers],
  imports: [
    CommonModule,
    Feature2RoutingModule,
    StoreModule.forFeature('feature2', reducers),
    SharedModule
  ],
  bootstrap: []
})
export class Feature2Module {}
