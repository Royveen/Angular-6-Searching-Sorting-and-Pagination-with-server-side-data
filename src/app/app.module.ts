import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
import { SwitchComponent } from './components/switch/switch.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    WorkerCardComponent,
    MainPageComponent,
    FilterComponentComponent,
    SwitchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
