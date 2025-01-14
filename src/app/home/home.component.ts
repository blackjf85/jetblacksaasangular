import { Component } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
} from '../../../libs/shared/ui-components/src/lib/ui-components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
