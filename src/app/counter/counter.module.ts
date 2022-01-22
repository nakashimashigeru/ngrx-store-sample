import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './state';
import { MatButtonModule } from '@angular/material/button';
import { CounterStore } from './counter.store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducers, { metaReducers: fromCounter.metaReducers }),
    MatButtonModule,
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    CounterComponent
  ],
  providers: [CounterStore]
})
export class CounterModule { }
