import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponentComponent } from './filter-component.component';

describe('FilterComponentComponent', () => {
  let component: FilterComponentComponent;
  let fixture: ComponentFixture<FilterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value', () => {

    spyOn(component.filterValue, 'emit');

    // trigger the keyup
    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input');
    component.timeoutId = null;
    input.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    jasmine.clock().tick(751);
    expect(component.filterValue.emit).toHaveBeenCalled();
   });
});
