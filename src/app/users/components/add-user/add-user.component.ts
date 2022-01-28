import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map, pairwise, startWith } from 'rxjs/operators';
import { User } from '../../models/user.model';

import * as UserActions from './../../+state/user.actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, AfterViewInit {

  public readonly addFormCtrl = {
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

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
    ) { }

  ngOnInit(): void {
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

  createUser() {
    const userInfo: User = {
      id: this.addForm.controls[this.addFormCtrl.ID].value,
      name: this.addForm.controls[this.addFormCtrl.NAME].value
    };

    this.store.dispatch(UserActions.createUser({ user: userInfo }));

    this.router.navigate(['/users']);
  }
}
