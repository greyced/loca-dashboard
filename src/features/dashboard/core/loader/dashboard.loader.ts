import { httpResource, HttpResourceRef } from "@angular/common/http";
import { Visit } from "../../model/dashboard.model";
import { inject, Inject, Injectable, Injector, Signal } from "@angular/core";

@Injectable()
export class DashboardLoader {

    private readonly baseUrl = 'https://loca-dashboard-back.onrender.com';


    getVisits(from: Signal<Date>, to: Signal<Date>): HttpResourceRef<Visit[] | undefined> {
        return httpResource<Visit[]>(() => `${this.baseUrl}/visits?from=${from().getTime()}&to=${to().getTime()}`)
    }
}