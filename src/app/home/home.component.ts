import { Component } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
  InputComponent,
} from '../../../libs/shared/ui-components/src/lib/ui-components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CardComponent, InputComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  demoInputValue = '';
}
