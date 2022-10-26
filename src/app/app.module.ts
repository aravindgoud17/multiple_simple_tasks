import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartssComponent } from './chartss/chartss.component';
import { GraphsService } from './graphs.service';
import { CurdFormComponent } from './curd-form/curd-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FulldetailsComponent } from './fulldetails/fulldetails.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { GituserdetailsComponent } from './gituserdetails/gituserdetails.component';
import { FormsExamplesComponent } from './forms-examples/forms-examples.component';
import { CurdTaskComponent } from './curd-task/curd-task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabletaskComponent } from './task/tabletask/tabletask.component';
import { TableformComponent } from './task/tableform/tableform.component';
import { OwnerRoutingModule } from './owner/owner-routing.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartssComponent,
    CurdFormComponent,
    FulldetailsComponent,
    GituserdetailsComponent,
    FormsExamplesComponent,
    CurdTaskComponent,
    TabletaskComponent,
    TableformComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    OwnerRoutingModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbModule,//this is model view for bootstrap
  ],
  providers: [GraphsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
