import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './+state/user.effects';
import { reducer, userFeatureKey } from './+state/user.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(userFeatureKey, reducer)
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
