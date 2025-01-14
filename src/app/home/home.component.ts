import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/button/button.component';
import { CardComponent } from '@shared/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
