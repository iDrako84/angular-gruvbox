import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUsers, UserModel } from '../../features/table-users/user.model';

@Injectable({ providedIn: 'root' })
export class HttpUsersService {

    constructor(private _http: HttpClient) { }

    public getUsers(): Observable<UserModel[]> {
        return this._http.get<IUsers>('mock/users.json')
            .pipe(
                map((res: IUsers) => res.data)
            )
    }

}