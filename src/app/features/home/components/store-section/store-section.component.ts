import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-store-section',
  imports: [RadioButtonModule, CommonModule, ReactiveFormsModule, FormsModule, CheckboxModule],
  templateUrl: './store-section.component.html',
  styleUrl: './store-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreSectionComponent {
  form: FormGroup;
  checked!: false;
  categories = [
    { key: '1', name: 'Category 1' },
    { key: '2', name: 'Category 2' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedCategory: [null],
    });
  }
}
