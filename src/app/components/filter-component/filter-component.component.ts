import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {

  @Output() filterValue = new EventEmitter();
  public timeoutId: number;
  constructor() { }

  ngOnInit(): void {
  }

  public sendValue($event): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => {
      this.filterValue.emit($event.target.value);
    }, 750);
  }
}
