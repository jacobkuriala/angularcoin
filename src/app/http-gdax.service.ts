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
      let priceChartData = {
        linechartdata:[],
        linechartlabels:[]
      };
      priceChartData.linechartdata.push({
        data:[],
        label: "Bitcoin Closing Price"
        });
        for(let priceKey in priceResponse.bpi){
          priceChartData.linechartdata[0].data.push(Math.floor(+priceResponse.bpi[priceKey]));
          priceChartData.linechartlabels.push(priceKey);
          // console.log(priceKey + ' ' + priceResponse.bpi[priceKey]);
        }
        return priceChartData;
    });
  }

}
