import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RadioComponent,
    }
  ]
})
export class RadioComponent implements OnInit {

  @Input() id: string | any;
  @Input() name: string | any;
  @Input() parentForm!: FormGroup;
  @Input() formControlName: string | any;

  controlSubscription!: any;
  modelValue: any;

  ngOnInit(): void { }


  onChanged: Function = () => { };
  onTouched: Function = () => { };
  onWriteValue: Function = () => { };

  registerOnChange(fn: Function) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  writeValue(): void {
  }

}
