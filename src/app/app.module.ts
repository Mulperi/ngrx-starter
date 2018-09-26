import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainerComponent } from './containers/app-container/app-container.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthStoreModule } from './store/auth/auth-store.module';

@NgModule({
  declarations: [AppContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({}),
    AuthStoreModule
  ],
  providers: [],
  bootstrap: [AppContainerComponent]
})
export class AppModule {}
