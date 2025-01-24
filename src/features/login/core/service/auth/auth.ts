export abstract class Auth {
    abstract logOn(data: { username: string; password: string}): boolean;
    abstract logOff(): boolean;
}