import { Injectable } from '@angular/core';

export type UserModel = {
  firstName: string;
  lastName: string;
  occupation: string;
};

@Injectable({
  providedIn: 'root'
})

export class UserDataService {


  userOccupationDefault = "Не указана";

  userObject: UserModel = {
    "firstName": "Аркадий",
    "lastName": "Распутин",
    "occupation": this.userOccupationDefault
  }

  occupationsArray: string[] = [
    'Программист',
    'Бухгалтер',
    'Учитель',
    'Инженер',
    'Архитектор',
    'Сантехник',
    'Плотник',
    'Руководитель',
    'Менеджер',
    'Космонавт'
  ]

  getUserObject() {
    return this.userObject;
  }

  updateUserName(firstName: string, secondName: string) {
    this.userObject.firstName = firstName;
    this.userObject.lastName = secondName;
  }

  updateUserOccupation(occupation: string) {
    this.userObject.occupation = occupation;
  }

  getOccupationsArray() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.occupationsArray);
      }, 1000);
    });
  }
}
