import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { reducers } from './';

@NgModule({
  imports: [BrowserModule, StoreModule.forFeature('auth', reducers)]
})
export class AuthStoreModule {}
