import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { FilterComponentComponent } from '../../components/filter-component/filter-component.component';
import { WorkerService } from '../../services/worker.service';
import { SwitchComponent } from 'src/app/components/switch/switch.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { WorkerCardComponent } from 'src/app/components/worker-card/worker-card.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxPaginationModule
      ],
      declarations: [ MainPageComponent , FilterComponentComponent, SwitchComponent, WorkerCardComponent],
      providers: [
        HttpClient,
        HttpHandler,
        WorkerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
