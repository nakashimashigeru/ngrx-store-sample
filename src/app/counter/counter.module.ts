import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './state';
import { MatButtonModule } from '@angular/material/button';
import { CounterStore } from './counter.store';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducers, { metaReducers: fromCounter.metaReducers }),
    MatButtonModule
  ],
  exports: [
    CounterComponent
  ],
  providers: [CounterStore]
})
export class CounterModule { }
