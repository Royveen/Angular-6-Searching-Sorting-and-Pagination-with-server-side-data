import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WorkOrderModel, WorkerModel ,
  WorkOrderModelResponse, WorkerModelResponse} from '../models/workOrderModel';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  public workOrderURL = 'https://www.hatchways.io/api/assessment/work_orders';

  public workerURL = ' https://www.hatchways.io/api/assessment/workers/';

  public workOrders: WorkOrderModel[] = [];

  constructor(private http: HttpClient) { }

  public getWorkOrders (): Observable<WorkOrderModel[]> {
    return this.http.get(this.workOrderURL).pipe(
      map((data: WorkOrderModelResponse)  =>  {
        this.workOrders = this.getSortedDates('asc', data.orders);
        this.workOrders.map((order) => {
          this.getWorkerDetails(order.workerId).then(( worker: WorkerModel) => {
            order['workerDetails'] = worker;
          });
        });
        return this.workOrders;
      })
    );
  }

  public getWorkerDetails (workerID: number): Promise<WorkerModel> {
    return this.http.get(this.workerURL + workerID).pipe(
      map((data: WorkerModelResponse)  =>  data.worker)
    ).toPromise();
  }

  public getWorkOrderFiltered (value: string): WorkOrderModel[] {
    if (value.length === 0) {
      return this.workOrders;
    }
    return this.workOrders.filter((order) => order.workerDetails.name.toLowerCase().includes(value));

  }

  public getSortedDates (type: String, data: WorkOrderModel[]): WorkOrderModel[] {
    if (type === 'asc') {
      return data.sort((a , b) => {
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      });
    } else {
      return data.sort((a , b) => {
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      });
    }

  }
}
