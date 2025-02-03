import { Component, computed, inject, resource, signal, WritableSignal } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRangeService } from '../../../core/services/date-range.service';
import { OnMonthAgo, Today } from '../../../core/const/time.const';
import { TimeStore } from '../../../core/store/time/time.store';


@Component({
  selector: 'app-date-range-picker',
  providers: [provideNativeDateAdapter(), TimeStore],
  imports: [MatFormFieldModule, FormsModule, MatLabel, MatDatepickerModule, ReactiveFormsModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent {

  #timeStore = inject(TimeStore);

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  fullDate = this.#timeStore.fullDate;


  public from: WritableSignal<Date> = signal(OnMonthAgo);
  public to = signal(Today);

  constructor() {
  }




}
