export interface User {
    username: string;
    roles: UserRole[]
}

export enum UserRole {
    ADMIN,
    READER
}