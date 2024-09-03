import { Component } from '@angular/core';

@Component({
  selector: 'z-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public vkMouseIn: boolean = false;
  public tlgMouseIn: boolean = false;

  public actualYear: number = new Date().getFullYear();
}
