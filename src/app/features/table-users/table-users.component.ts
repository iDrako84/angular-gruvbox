import { Component, WritableSignal } from '@angular/core';
import { TableUsersService } from './table-users.service';
import { UserModel } from './user.model';
import { RolePipe } from './role.pipe';
import { GruvButtonDirective } from '../../shared/directives/button.directive';

@Component({
  selector: 'gruv-table-users',
  imports: [
    RolePipe,
    GruvButtonDirective
  ],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss'
})
export class TableUsersComponent {
  public readonly users: WritableSignal<UserModel[]>;
  public readonly columns: WritableSignal<string[]>;

  constructor(
    private _tableUsersService: TableUsersService
  ) {
    this.users = this._tableUsersService.getUsers();
    this.columns = this._tableUsersService.getColumns();
  }

  public onRemoveUser(index: number): void {
    this._tableUsersService.removeUser(index);
  }
}
