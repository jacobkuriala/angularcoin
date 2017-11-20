import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { CoindeskPriceCloseResponse } from "./models/coindeskResponse";


@Injectable()
export class HttpGdaxService {

  constructor(private httpClient: HttpClient) { }

  public getPricesFromCoinDesk() {
    return this.httpClient.get('https://api.coindesk.com/v1/bpi/historical/close.json');
  }

  public getChartsPricesFromCoinDesk() {
    return this.httpClient.get<CoindeskPriceCloseResponse>('https://api.coindesk.com/v1/bpi/historical/close.json')
    .map((priceResponse) =>{
      let priceChartData = [{
        key: "Bitcoin Closing Price",
        values:[]
      }];

        for(let priceKey in priceResponse.bpi){
          priceChartData[0].values.push({
            "label" : priceKey,
            "value" : priceResponse.bpi[priceKey]
          })
          console.log(priceKey + ' ' + priceResponse.bpi[priceKey]);
        }

        console.log(priceChartData);
        return priceChartData;
    });
  }

}
