import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCardComponent } from './worker-card.component';
import { WorkerService } from 'src/app/services/worker.service';

import { HttpClientModule } from '@angular/common/http';
describe('WorkerCardComponent', () => {
  let component: WorkerCardComponent;
  let fixture: ComponentFixture<WorkerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [ WorkerCardComponent ],
      providers: [WorkerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
