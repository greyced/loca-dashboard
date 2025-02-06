import { Component, computed, inject, resource, signal, WritableSignal } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRangeService } from '../../core/service/date-range.service';
import { OneWeekAgo, Today } from '../../../../core/const/time.const';
import { TimeStore } from '../../../../core/store/time/time.store';
import { MatButtonModule } from '@angular/material/button';
import { DashboardStore } from '../../core/store/dashboard.store';
import { VisitDataService } from '../../core/service/visit.service';


@Component({
  selector: 'app-date-range-picker',
  providers: [provideNativeDateAdapter(), DateRangeService, VisitDataService, DashboardStore],
  imports: [MatFormFieldModule, FormsModule, MatLabel, MatDatepickerModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent {

  readonly #dateRangeService = inject(DateRangeService);

  readonly #dashboardStore = inject(DashboardStore);
  
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr');
  }

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  public from = this.#dateRangeService.from;

  public to = this.#dateRangeService.to;

}
