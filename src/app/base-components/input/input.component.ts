import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [
    trigger('nameLabel', [
      state('normal', style({
        transform: 'translateY(30px)',
        color: 'gray'
      })),
      state('floatedUp', style({
        transform: 'translateY(8px)',
        color: '#8d53d7', // sass helper compenent needed to get viriables
        fontSize: '0.8rem',
        backgroundColor: 'white'
      })),
      transition('normal <=> floatedUp', animate(300))
    ])
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    }
  ]
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() id: string | any;
  @Input() name: string | any;
  @Input() parentForm!: FormGroup;
  @Input() formControlName: string | any;

  nameLabelState = 'floatedUp';
  controlSubscription!: any;


  constructor() { }

  ngOnInit(): void {
    this.controlSubscription = this.parentForm.controls[this.id].valueChanges.subscribe(value => {
      if (value === '' && this.nameLabelState === 'floatedUp' && !this.parentForm.controls[this.id].dirty) {
        this.nameLabelState = 'normal';
      }
    });
  }

  onChanged: Function = () => { };
  onTouched: Function = () => { };
  onWriteValue: Function = () => { };

  registerOnChange(fn: Function) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  writeValue(): void { }

  onFocus() {
    this.nameLabelState = 'floatedUp';
  }

  onBlur() {
    this.parentForm.controls[this.id].value ? this.nameLabelState = 'floatedUp' : this.nameLabelState = 'normal';
  }

  ngOnDestroy(): void {
    this.controlSubscription.unsubscribe();
  }

}
