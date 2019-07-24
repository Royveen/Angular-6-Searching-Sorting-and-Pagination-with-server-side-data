import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import {WorkerService} from '../../services/worker.service';
import { WorkOrderModel } from '../../models/workOrderModel';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss']
})
export class WorkerCardComponent implements OnInit {

  @Input() workOrder: WorkOrderModel;

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
  }

}
