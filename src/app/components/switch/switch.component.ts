import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Output() value = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public sendValue($event): void {
    this.value.emit($event.target.checked);
  }
}
