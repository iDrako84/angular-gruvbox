import { Pipe, PipeTransform } from '@angular/core';
import { RoleEnum } from './user.model';

@Pipe({
    name: 'role'
})

export class RolePipe implements PipeTransform {
    transform(value: RoleEnum): string {
        if (value === RoleEnum.ADMIN) return 'Admin';
        if (value === RoleEnum.USER) return 'User';
        return '';
    }
}