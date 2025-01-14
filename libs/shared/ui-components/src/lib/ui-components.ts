import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Button Components
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './button/icon-button.component';

// Card Components
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header.component';
import { CardFooterComponent } from './card/card-footer.component';

// Input Components
import { InputComponent } from './input/input.component';
import { PinInputComponent } from './input/pin-input.component';

// Modal Components
import { ModalComponent } from './modal/modal.component';
import { ModalHeaderComponent } from './modal/modal-header.component';
import { ModalFooterComponent } from './modal/modal-footer.component';

// Other Components
import { TableComponent } from './table/table.component';
import { BadgeComponent } from './badge/badge.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ProgressBarComponent } from './progress/progress-bar.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { LoadingSpinnerComponent } from './loading/loading-spinner.component';
import { AvatarComponent } from './avatar/avatar.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    InputComponent,
    PinInputComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    TableComponent,
    BadgeComponent,
    TooltipDirective,
    DropdownComponent,
    ToggleComponent,
    ProgressBarComponent,
    EmptyStateComponent,
    LoadingSpinnerComponent,
    AvatarComponent,
    IconComponent,
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    InputComponent,
    PinInputComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    TableComponent,
    BadgeComponent,
    TooltipDirective,
    DropdownComponent,
    ToggleComponent,
    ProgressBarComponent,
    EmptyStateComponent,
    LoadingSpinnerComponent,
    AvatarComponent,
    IconComponent,
  ],
})
export class UiComponentsModule {}
