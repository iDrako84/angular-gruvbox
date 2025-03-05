export enum RoleEnum {
    ADMIN = 1,
    USER = 2,
}

export class UserModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public role: RoleEnum,
    ) {}
}