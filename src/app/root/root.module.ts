import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainerComponent } from '../root/containers/app-container/app-container.component';
import { AppRoutingModule } from './root-routing.module';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';

@NgModule({
  declarations: [AppContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([...effects]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppContainerComponent]
})
export class RootModule {}
