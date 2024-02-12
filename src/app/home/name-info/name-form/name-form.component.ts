import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDataService } from '../../../user-data.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../base-components/button/button.component';
import { PopupComponent } from '../../../base-components/popup/popup.component';
import { InputComponent } from '../../../base-components/input/input.component';

@Component({
  selector: 'app-name-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent, PopupComponent, InputComponent, NameFormComponent],
  templateUrl: './name-form.component.html',
  styleUrl: './name-form.component.scss'
})
export class NameFormComponent {
  @Output() isClosed = new EventEmitter<boolean>();

  nameForm: FormGroup;

  constructor(private userDateService: UserDataService) {
    this.nameForm = new FormGroup({
      firstName: new FormControl(this.userDateService.getUserObject().firstName || '', [Validators.required, this.checkForRusLetters.bind(this)]),
      lastName: new FormControl(this.userDateService.getUserObject().lastName || '', [Validators.required, this.checkForRusLetters.bind(this)]),
    })
  }

  onSubmit() {
    if (this.nameForm.valid) {
      this.userDateService.updateUserName(this.nameForm.value.firstName, this.nameForm.value.lastName);
      this.nameForm.reset();
      this.onClose();
    }
  }

  private closeForm() {
    this.nameForm.reset();
    this.resetFormControls();
  }

  public onClose() {
    this.closeForm();
    this.isClosed.emit(true);
  }

  resetFormControls() {
    for (let key in this.nameForm.controls) {
      this.nameForm.controls[key].setValue('');
    }
  }

  checkForRusLetters(control: FormControl): { [s: string]: boolean } | null {
    if (!(/^[а-яА-Я-]*$/.test(control.value))) {
      return { nameIsInvalid: true }
    } else {
      return null;
    }
  }

}
