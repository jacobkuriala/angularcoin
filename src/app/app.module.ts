import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import  {ChartsModule} from "ng2-charts";
import { Routes, RouterModule } from "@angular/router";
import { HttpGdaxService } from './http-gdax.service';

import { AppComponent } from './app.component';
import { TestingGdaxwebSocketComponent } from './component/testing-gdaxweb-socket/testing-gdaxweb-socket.component';
import { GdaxHttpComponent } from './component/gdax-http/gdax-http.component';
import { PriceChartComponent } from './component/price-chart/price-chart.component';
import { TopNavComponent } from './component/top-nav/top-nav.component';
import { AboutComponent } from './component/about/about.component';
import { PriceChartPickerComponent } from './component/price-chart-picker/price-chart-picker.component';



const appRoutes: Routes = [
  {path: '' ,component: PriceChartComponent},
  {path: 'ticker', component: TestingGdaxwebSocketComponent},
  {path: 'prices/:duration', component: PriceChartComponent},
{path: 'about' ,component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestingGdaxwebSocketComponent,
    GdaxHttpComponent,
    PriceChartComponent,
    TopNavComponent,
    AboutComponent,
    PriceChartPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [HttpGdaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
