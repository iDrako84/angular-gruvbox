import { Injectable, signal, WritableSignal } from '@angular/core';
import { RoleEnum, UserModel } from './user.model';

@Injectable({ providedIn: 'root' })
export class TableUsersService {
    private readonly users: WritableSignal<UserModel[]> = signal([
        new UserModel('Max', 'A', 41, RoleEnum.ADMIN)
    ]);
    private readonly columns: WritableSignal<string[]> = signal([
        'Name',
        'Age',
        'Role',
        'Action'
    ]);

    constructor() { }

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