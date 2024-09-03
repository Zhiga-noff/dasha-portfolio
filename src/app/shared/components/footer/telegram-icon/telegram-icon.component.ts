import { Component, Input } from '@angular/core';

@Component({
  selector: 'z-telegram-icon',
  templateUrl: './telegram-icon.component.html',
  styleUrl: './telegram-icon.component.scss',
})
export class TelegramIconComponent {
  @Input() active: boolean;
}
