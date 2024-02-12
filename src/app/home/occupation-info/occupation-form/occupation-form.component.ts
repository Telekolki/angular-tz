import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from "../../../base-components/button/button.component";
import { PopupComponent } from "../../../base-components/popup/popup.component";
import { RadioComponent } from '../../../base-components/radio/radio.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserDataService, UserModel } from '../../../user-data.service';

@Component({
  selector: 'app-occupation-form',
  standalone: true,
  templateUrl: './occupation-form.component.html',
  styleUrl: './occupation-form.component.scss',
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent, PopupComponent, RadioComponent],
})
export class OccupationFormComponent implements OnInit {
  @Input() user: UserModel | any;
  @Output() isClosed = new EventEmitter<boolean>();

  occupationForm: FormGroup;
  occupationsArray: string[] = [];

  constructor(private userDateService: UserDataService) {
    this.occupationForm = new FormGroup({
      occupation: new FormControl(userDateService.getUserObject().occupation, [Validators.required, this.checkForEmpty.bind(this)]),
    })
  }

  ngOnInit(): void {
    this.userDateService.getOccupationsArray().then((value) => this.occupationsArray = value as string[]);
  }

  onSubmit() {
    if (this.occupationForm.valid) {
      this.userDateService.updateUserOccupation(this.occupationForm.value.occupation);
      this.occupationForm.reset();
      this.onClose();
    }
  }

  private closeForm() {
    this.occupationForm.reset();
    this.resetFormControls();
  }

  public onClose() {
    this.closeForm();
    this.isClosed.emit(true);
  }

  resetFormControls() {
    for (let key in this.occupationForm.controls) {
      this.occupationForm.controls[key].setValue('');
    }
  }

  checkForEmpty(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === this.userDateService.userOccupationDefault || !control.value) {
      return { occupationIsInvalid: true }
    } else {
      return null;
    }
  }

}
