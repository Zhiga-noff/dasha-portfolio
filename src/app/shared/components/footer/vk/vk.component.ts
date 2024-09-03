import { Component, Input } from '@angular/core';

@Component({
  selector: 'z-vk',
  templateUrl: './vk.component.html',
  styleUrl: './vk.component.scss',
})
export class VkComponent {
  @Input() active: boolean;
}
