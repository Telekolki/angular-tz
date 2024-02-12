import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../base-components/button/button.component";
import { PopupComponent } from "../../base-components/popup/popup.component";
import { CommonModule } from '@angular/common';
import { NameFormComponent } from "./name-form/name-form.component";
import { FullNamePipe } from "../../pipes/full-name.pipe";
import { UserDataService, UserModel } from '../../user-data.service';

@Component({
  selector: 'app-name-info',
  standalone: true,
  templateUrl: './name-info.component.html',
  styleUrl: './name-info.component.scss',
  imports: [ButtonComponent, PopupComponent, NameFormComponent, CommonModule, FullNamePipe]
})

export class NameInfoComponent implements OnInit {

  user: UserModel = {
    firstName: '',
    lastName: '',
    occupation: '',
  };

  constructor(private userDateService: UserDataService) {
    this.user = this.userDateService.getUserObject();
  }

  isOpened: boolean = false;

  ngOnInit(): void { }

  onEditButtonClicked() {
    this.isOpened = true;
  }

  private closePopup() {
    this.isOpened = false;
  }

  public onCloseButtonClicked() {
    this.closePopup();
  }

  onIsClosedEmitted() {
    this.closePopup();
  }

}
