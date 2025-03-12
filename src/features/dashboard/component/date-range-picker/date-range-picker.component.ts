import { Component, computed, inject, linkedSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { DateRangeService } from '../../core/service/date-range.service';
import { DashboardStore } from '../../core/store/dashboard.store';


@Component({
  selector: 'app-date-range-picker',
  providers: [provideNativeDateAdapter(), DateRangeService, DashboardStore],
  imports: [MatFormFieldModule, FormsModule, MatLabel, MatDatepickerModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent {

  readonly #store = inject(DashboardStore);

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr');
  }

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  from = linkedSignal(() => this.#store.filter.from());
  to = linkedSignal(() => this.#store.filter.to());


  #linkedFilter = computed(() => ({
    from: this.from(),
    to: this.to()
  }));

  onChanges() {
    this.#store.updateFilter(this.#linkedFilter);
  }
}
