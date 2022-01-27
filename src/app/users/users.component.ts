import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, pairwise, startWith } from 'rxjs/operators';
import { UserFacade } from './+state/user.facade';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

import * as UserActions from './../users/+state/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  users$: null | Observable<User[]> = null;

  public readonly addFormCtrl = {
    ID: 'id',
    NAME: 'name'
  };

  public readonly editFormCtrl = {
    ID: 'id',
    NAME: 'name'
  };

  public readonly addForm: FormGroup = this.formBuilder.group({
    [this.addFormCtrl.ID]: [
      '',
      [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
    ],
    [this.addFormCtrl.NAME]: ['', [Validators.required]]
  });

  public readonly editForm: FormGroup = this.formBuilder.group({
    [this.editFormCtrl.ID]: [
      '',
      [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
    ],
    [this.editFormCtrl.NAME]: ['', [Validators.required]]
  });

  constructor(
    private userFacade: UserFacade,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private store: Store
    ) {
    this.userFacade.loadUsers();
  }

  ngOnInit(): void {
    this.users$ = this.userFacade.users$;
  }

  ngAfterViewInit(): void {
      this.addForm.valueChanges
        .pipe(
          distinctUntilChanged(
            (pre, cur) => JSON.stringify(pre) === JSON.stringify(cur)
          ),
          startWith(this.addForm.value),
          pairwise(),
          map(([pre, cur]) => ({
            id: {
              pre: pre.id,
              value: cur.id,
              isSelected: pre.id !== cur.id
            },
            name: {
              pre: pre.name,
              value: cur.name,
              isSelected: pre.name !== cur.name
            },
          }))
        )
        .subscribe((value) => {
          console.log(value);
        });
  }

  getUser(id: number) {
    this.userFacade.loadUser(id);
    this.userFacade.user$.subscribe(
      data => {
        this.editForm.controls[this.editFormCtrl.ID].setValue(data.id);
        this.editForm.controls[this.editFormCtrl.NAME].setValue(data.name);
      }
    );
  }

  createUser() {
    const userInfo: User = {
      id: this.addForm.controls[this.addFormCtrl.ID].value,
      name: this.addForm.controls[this.addFormCtrl.NAME].value
    };

    this.store.dispatch(UserActions.createUser({ user: userInfo }));
  }

  updateUser() {
    const userInfo: User = {
      id: this.editForm.controls[this.editFormCtrl.ID].value,
      name: this.editForm.controls[this.editFormCtrl.NAME].value
    };

    this.store.dispatch(UserActions.updateUser({ id: userInfo.id, user: userInfo }));
  }

  deleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({ id: id }));
  }
}
