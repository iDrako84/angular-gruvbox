import { Component, WritableSignal } from '@angular/core';
import { TableUsersService } from './table-users.service';
import { UserModel } from './user.model';
import { RolePipe } from './role.pipe';
import { GruvButtonModule } from '../../shared/directives/gruv-button/gruv-button.module';
import { HttpUsersService } from '../../core/calls/http-users.service';
import { GruvTitleComponent } from '../../shared/utils/title/title.component';

@Component({
  selector: 'gruv-table-users',
  imports: [
    RolePipe,
    GruvButtonModule,
    GruvTitleComponent
  ],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss'
})
export class TableUsersComponent {
  public readonly users: WritableSignal<UserModel[]>;
  public readonly columns: WritableSignal<string[]>;

  constructor(
    private _tableUsersService: TableUsersService,
    public _httpUsersService: HttpUsersService
  ) {
    this.users = this._tableUsersService.getUsers();
    this.columns = this._tableUsersService.getColumns();
  }

  public onRemoveUser(index: number): void {
    this._tableUsersService.removeUser(index);
  }
}
