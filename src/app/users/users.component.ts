import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from './+state/user.facade';
import { User } from './models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: null | Observable<User[]> = null;

  constructor(private userFacade: UserFacade) {
    this.userFacade.loadUsers();
  }

  ngOnInit(): void {
    this.users$ = this.userFacade.users$;
  }
}
