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

@NgModule({
  declarations: [
    AppComponent,
    ChartssComponent,
    CurdFormComponent,
    FulldetailsComponent,
    GituserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [GraphsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
