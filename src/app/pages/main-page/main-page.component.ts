import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { WorkOrderModel, WorkerModel } from 'src/app/models/workOrderModel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public workOrders: WorkOrderModel[] = [];
  public filterValue: String = '';
  public sortType: String = 'asc';
  public paginationConfig: any;

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.workerService.getWorkOrders().subscribe((data: WorkOrderModel[]) => {
      this.workOrders = data;
      this.paginationConfig = {
        itemsPerPage: 4,
        currentPage: 1,
      };
    });
  }

  public filterBy(workerName: string): void  {
    this.workOrders = this.workerService.getWorkOrderFiltered(workerName);
    this.workOrders = this.workerService.getSortedDates(this.sortType, this.workOrders);
  }

  public sortBy(type: boolean): void {
    this.sortType = type ? 'desc' : 'asc';
    this.workOrders = this.workerService.getSortedDates(this.sortType, this.workOrders);
  }

  public pageChanged($event): void {
    this.paginationConfig.currentPage = $event;
  }
}
