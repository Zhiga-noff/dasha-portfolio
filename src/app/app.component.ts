import { Component } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(protected popup: PopupService) {}
}
