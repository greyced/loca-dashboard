import { Injectable, signal } from '@angular/core';
import { OneWeekAgo, Today } from '../../../../core/const/time.const';

@Injectable()
export class DateRangeService {

    from = signal(OneWeekAgo);

    to = signal(Today);

    updateRange(from: Date, to: Date){
        this.from.set(from);
        this.to.set(to);
    }
    
}
