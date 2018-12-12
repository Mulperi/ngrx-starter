import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppContainerComponent } from '../core/containers/app-container/app-container.component';
import { AppRoutingModule } from './core-routing.module';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([...effects]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({}),
    SharedModule
  ],
  bootstrap: [AppContainerComponent]
})
export class RootModule {}
