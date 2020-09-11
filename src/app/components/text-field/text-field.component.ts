import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  @Input() label: string;
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  emitValueChange(): void {
    this.valueChange.emit(this.value);
  }

  handleFocus (e: FocusEvent): void {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    input.select();
    const line = input.nextElementSibling as Element;
    const label = input.previousElementSibling as HTMLLabelElement;
    label.classList.add('float-above');
    line.classList.add('extended');
  }

  handleBlur (e: FocusEvent): void {
    const input = e.target as HTMLInputElement;
    const line = input.nextElementSibling as Element;
    const label = input.previousElementSibling as HTMLLabelElement;
    line.classList.remove('extended');
    !input.value && label.classList.remove('float-above');
  }
}

