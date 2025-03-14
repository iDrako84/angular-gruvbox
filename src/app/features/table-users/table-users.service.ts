import { Injectable, signal, WritableSignal } from '@angular/core';
import { UserModel } from './user.model';
import { HttpUsersService } from '../../core/calls/http-users.service';

@Injectable({ providedIn: 'root' })
export class TableUsersService {
    private readonly users: WritableSignal<UserModel[]> = signal([]);
    private readonly columns: WritableSignal<string[]> = signal([
        'Name',
        'Age',
        'Role',
        'Action'
    ]);

    constructor(private _httpUsersService: HttpUsersService) { 
        this._httpUsersService.getUsers().subscribe({
            next: (users: UserModel[]) => this.users.set(users)
        });
    }

    public getUsers(): WritableSignal<UserModel[]> {
        return this.users;
    }

    public addUser(user: UserModel): void {
        this.users.update(v => [
            ...v,
            user
        ]);
    }

    public removeUser(index: number): void {
        this.users.update(v => {
            v.splice(index, 1);
            return v;
        });
    }

    public getColumns(): WritableSignal<string[]> {
        return this.columns;
    }
}