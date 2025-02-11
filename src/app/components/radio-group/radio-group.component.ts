import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.css',
  imports: [CommonModule, RadioButtonModule, ReactiveFormsModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RadioGroupComponent {
  @Input() title: string = '';
  @Input() items: { key: string; name: string }[] = [];
  @Output() selected = new EventEmitter<string>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedOption: [null], // Default value
    });

    this.form.get('selectedOption')?.valueChanges.subscribe((value) => {
      this.selected.emit(value);
    });
  }
}
