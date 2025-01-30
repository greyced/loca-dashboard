import { Component, inject } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRangeService } from '../../../core/services/date-range.service';


@Component({
  selector: 'app-date-range-picker',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, FormsModule, MatLabel, MatDatepickerModule, ReactiveFormsModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent {

  #dateRangeService = inject(DateRangeService);

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
