import { Component, OnInit } from '@angular/core';
import { HttpGdaxService } from '../../http-gdax.service';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit, OnDestroy {
  result;
  constructor(private httpGdaxService: HttpGdaxService) { }

  ngOnInit() {

    this.result = this.httpGdaxService.getChartsPricesFromCoinDesk().subscribe(
      (response) => { console.log(response)},
      (error) => {console.log('Error')},
      () => {console.log('completed')}
    );
  }

  ngOnDestroy(){
    this.result.unsubscribe();
  }

}
