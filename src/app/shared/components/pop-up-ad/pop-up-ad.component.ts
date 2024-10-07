import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../../popup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IFormFields {
  name: FormControl;
  phone: FormControl;
  email: FormControl;
  comments?: FormControl;
}

@Component({
  selector: 'z-pop-up-ad',
  templateUrl: './pop-up-ad.component.html',
  styleUrl: './pop-up-ad.component.scss',
})
export class PopUpAdComponent implements OnInit {
  protected form: FormGroup;

  constructor(protected popup: PopupService) {}

  ngOnInit(): void {
    this.form = new FormGroup<IFormFields>({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      comments: new FormControl(null),
    });
  }

  formatPhoneNumber() {
    let phoneNumber = this.form.get('phoneClient').value;
    phoneNumber = phoneNumber.replace(/\D/g, ''); // Удалить все символы, кроме цифр

    if (phoneNumber.length >= 1 && phoneNumber.charAt(0) !== '7') {
      phoneNumber = '7' + phoneNumber; // Добавить единицу, если номер не начинается с 7
    }

    phoneNumber = phoneNumber.slice(0, 11); // Ограничить длину номера до 11 символов

    phoneNumber =
      '+7 (' +
      phoneNumber.slice(1, 4) +
      ') ' +
      phoneNumber.slice(4, 7) +
      ' - ' +
      phoneNumber.slice(7, 9) +
      ' - ' +
      phoneNumber.slice(9, 11);

    this.form.get('phoneClient').setValue(phoneNumber, { emitEvent: false });
  }

  async submit() {
    let formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('phone', this.form.value.phone);
    formData.append('email', this.form.value.email);
    formData.append('comments', this.form.value.comments);

    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    console.log(this.form.value);
    if (!response.ok) {
      // this.form.reset();
      // this.popup.successfulResult = true;
      // setTimeout(() => {
      //   this.popup.setOff();
      // }, 10000);
    }

    console.log(response);
  }
}
