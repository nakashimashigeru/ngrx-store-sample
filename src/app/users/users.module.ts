import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './+state/user.effects';
import { reducer, userFeatureKey } from './+state/user.reducer';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(userFeatureKey, reducer),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent
  ]
})
export class UsersModule { }
