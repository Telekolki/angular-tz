import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Output() onClick = new EventEmitter<MouseEvent>();

  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }

}

