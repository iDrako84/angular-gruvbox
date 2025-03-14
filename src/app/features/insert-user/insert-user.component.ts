import { Component, signal } from '@angular/core';
import { GruvCardComponent } from '../../shared/utils/card/card.component';
import { GruvTitleComponent } from '../../shared/utils/title/title.component';
import { GruvInputFieldComponent } from '../../shared/utils/form-field/input-field/input-field.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InsertUserService } from './insert-user.service';
import { GruvButtonModule } from '../../shared/directives/gruv-button/gruv-button.module';
import { GruvSelectFieldComponent } from "../../shared/utils/form-field/select-field/select-field.component";
import { TableUsersService } from '../table-users/table-users.service';
import { UserModel } from '../table-users/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'gruv-insert-user',
  imports: [
    GruvCardComponent,
    GruvTitleComponent,
    GruvInputFieldComponent,
    GruvButtonModule,
    ReactiveFormsModule,
    GruvSelectFieldComponent
  ],
  templateUrl: './insert-user.component.html',
  styleUrl: './insert-user.component.scss'
})
export class InsertUserComponent {
  public form: FormGroup;
  public errorForm: { [key: string]: boolean } = {};
  public optionsRole = signal([
    { key: null, value: ' --- ' },
    { key: 1, value: 'ADMIN' },
    { key: 2, value: 'USER' },
  ]);

  constructor(
    private _insertUserService: InsertUserService,
    private _tableUsersService: TableUsersService,
    private _router: Router
  ) {
    const createForm: { form: FormGroup, errorForm: { [key: string]: boolean } } = this._insertUserService.createForm();
    this.form = createForm.form;
    this.errorForm = createForm.errorForm;
  }

  public onSubmit(): void {
    const controlForm = this._insertUserService.controlForm(this.form, this.errorForm);
    this.errorForm = controlForm.errorForm;
    if (!controlForm.valid) return;
    const newUser: UserModel = this.form.value;
    this._tableUsersService.addUser(newUser);
    this._router.navigate(['/table-users']);
  }
}
