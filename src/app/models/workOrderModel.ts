export interface WorkOrderModel {
    id?: string;
    name?: string;
    description?: string;
    deadline?: number;
    workerId?: number;
    workerDetails?: WorkerModel;
}

export interface WorkOrderModelResponse {
    orders: WorkOrderModel[];
}

export interface WorkerModelResponse {
    worker: WorkerModel;
}

export interface WorkerModel {
    id?: string;
    name?: string;
    email?: string;
    companyName?: string;
    image?: string;
}
