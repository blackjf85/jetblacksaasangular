import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'jb-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'number' | 'password' | 'pin' = 'text';
  @Input() name = '';
  @Input() id = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() label = '';
  @Input() error = '';
  @Input() isPin = false;

  private _value: string | number = '';
  displayValue = '';

  @Input()
  get value(): string | number {
    return this._value;
  }

  set value(val: string | number) {
    this._value = val;
    this.displayValue = this.isPin
      ? '*'.repeat(String(val).length)
      : String(val);
    this.onChange(val);
    this.onTouched();
    this.valueChange.emit(val);
  }

  @Output() valueChange = new EventEmitter<string | number>();
  onChange: (value: string | number) => void = (value) => {
    this._value = value;
    this.valueChange.emit(value);
  };
  onTouched: () => void = () => {
    // Mark as touched
  };

  ngOnInit() {
    if (this.type === 'pin') {
      this.isPin = true;
    }
  }

  writeValue(value: string | number): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = this.type === 'number' ? parseFloat(value) : value;
    this.onChange(this.value);
    this.onTouched();
    this.valueChange.emit(this.value);
  }
}
