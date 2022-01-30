import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { verticalFlipAnimation } from './../../../utils/animations/bounce.animation';
import { UserFacade } from '../../+state/user.facade';
import { User } from '../../models/user.model';

import * as UserActions from './../../+state/user.actions';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  animations: [verticalFlipAnimation]
})
export class EditUserComponent implements OnInit {

  public readonly editFormCtrl = {
    ID: 'id',
    NAME: 'name'
  };

  public readonly editForm: FormGroup = this.formBuilder.group({
    [this.editFormCtrl.ID]: [
      '',
      [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
    ],
    [this.editFormCtrl.NAME]: ['', [Validators.required]]
  });

  public get userId() {
    return this.route.snapshot.paramMap.get('id');
  }

  constructor(
    private userFacade: UserFacade,
    private formBuilder: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = Number(this.userId);
    this.userFacade.loadUser(id);
    this.userFacade.user$.subscribe(
      data => {
        this.editForm.controls[this.editFormCtrl.ID].setValue(data.id);
        this.editForm.controls[this.editFormCtrl.NAME].setValue(data.name);
      }
    );
  }

  updateUser() {
    const userInfo: User = {
      id: this.editForm.controls[this.editFormCtrl.ID].value,
      name: this.editForm.controls[this.editFormCtrl.NAME].value
    };

    this.store.dispatch(UserActions.updateUser({ id: userInfo.id, user: userInfo }));

    this.router.navigate(['/users']);
  }
}
