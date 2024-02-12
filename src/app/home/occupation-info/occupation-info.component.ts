import { Component, OnInit } from '@angular/core';
import { UserDataService, UserModel } from '../../user-data.service';
import { ButtonComponent } from '../../base-components/button/button.component';
import { PopupComponent } from '../../base-components/popup/popup.component';
import { OccupationFormComponent } from './occupation-form/occupation-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-occupation-info',
  standalone: true,
  imports: [ButtonComponent, PopupComponent, OccupationFormComponent, CommonModule],
  templateUrl: './occupation-info.component.html',
  styleUrl: './occupation-info.component.scss'
})
export class OccupationInfoComponent implements OnInit {

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
