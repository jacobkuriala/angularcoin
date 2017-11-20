import { Component, ViewChild,
   OnInit,ElementRef } from '@angular/core';
import { HttpGdaxService } from '../../http-gdax.service';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit, OnDestroy {
  @ViewChild('mychart') mychart : ElementRef;
  // lineChart
  public isDataAvailable:boolean = false;
   public lineChartData:Array<any> = [{data: []}];
  // [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  // ];
  public lineChartLabels:Array<any> = [];
  //= ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(135,206,250,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  result;
  constructor(private httpGdaxService: HttpGdaxService) { }

  ngOnInit() {

    this.result = this.httpGdaxService.getChartsPricesFromCoinDesk().subscribe(
      (response) => { console.log(response);
        this.lineChartLabels = response.linechartlabels;
        console.log(response.linechartdata);
        this.lineChartData = response.linechartdata;
        this.isDataAvailable = true;

      },
      (error) => {console.log('Error')},
      () => {console.log('completed')}
    );
  }

  ngOnDestroy(){
    this.result.unsubscribe();
  }

}
