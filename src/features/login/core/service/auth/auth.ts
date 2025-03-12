import { Observable } from "rxjs";

export abstract class Auth {
    abstract logOn(data: { mail: string; password: string}): Observable<boolean>;
    abstract logOff(): boolean;
}