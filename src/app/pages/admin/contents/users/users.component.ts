import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/pages/admin/contents/users/users.service';
import { Users } from 'src/app/pages/admin/contents/users/users';
import { Table } from 'primeng/table';

export interface TableColumns {
  header: string;
  field: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  users!: Users[];
  cols!: TableColumns[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(users => this.users = users);
    this.cols = [
      { field: 'fullname', header: 'Fullname' },
      { field: 'username', header: 'Username' },
      { field: 'password', header: 'Password' },
      { field: 'role', header: 'Role' }
    ];
  }

}
