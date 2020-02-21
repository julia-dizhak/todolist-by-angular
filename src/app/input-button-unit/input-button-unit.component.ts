import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input
      id="my-input"
      class="todo-input"
      #inputElementRef
      (keyup.enter)="submitValue($event.target.value)"
      [value]="title">

    <button
      class="btn"
      (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})

export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string = ''

  constructor() {

  }

  ngOnInit(): void {
    this.submitValue('test 2');
  }

  submitValue(newTitle): void {
    this.submit.emit(newTitle);
  }
}
