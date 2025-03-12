import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RealEstate } from '../../../../../models/real-estate.model';

@Component({
  selector: 'app-manager-dialog-card',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './manager-dialog-card.component.html',
  styleUrl: './manager-dialog-card.component.scss'
})
export class ManagerDialogCardComponent {
  readonly dialogRef = inject(MatDialogRef<ManagerDialogCardComponent>);
  readonly data = inject<RealEstate>(MAT_DIALOG_DATA);
  readonly description = signal(this.data?.description ?? '');
  readonly title = signal(this.data?.title ?? '');

  readonly realEstate = signal({
    title: this.title,
    description: this.description
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  onValid(){
    this.dialogRef.close({ ...this.data, title: this.title(), description: this.description() })
  }

}
