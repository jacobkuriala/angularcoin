import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestingGdaxwebSocketComponent } from './component/testing-gdaxweb-socket/testing-gdaxweb-socket.component';
import { GdaxHttpComponent } from './component/gdax-http/gdax-http.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpGdaxService } from './http-gdax.service';
import { PriceChartComponent } from './component/price-chart/price-chart.component';
import  {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    TestingGdaxwebSocketComponent,
    GdaxHttpComponent,
    PriceChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [HttpGdaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
