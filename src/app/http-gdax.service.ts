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

  public getChartsPrices() {
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

  public getChartsPricesWithParameters(duration:string) {
    if(!duration){
      return this.getChartsPrices();
    }
    let date = new Date();

    let endDate:string = this.getFormattedDate(date);
    if(duration == 'week'){
    date.setDate(date.getDate()-14);
    }else if(duration === 'month'){
      date.setDate(date.getDate()-31);
    }else if(duration === 'year'){
      date.setDate(date.getDate() - 365);
    }
    let startDate:string = this.getFormattedDate(date);
    return this.httpClient.get<CoindeskPriceCloseResponse>('https://api.coindesk.com/v1/bpi/historical/close.json?start='
  + startDate + '&end='+ endDate)
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

  private getFormattedDate(date:Date){

    let dd = date.getDate();
    let mm = date.getMonth()+1; //January is 0!
    let yyyy = date.getFullYear();
    let fmm:string;
    let fdd:string;

    fmm = mm < 10 ? '0'+ String(mm): String(mm);
    fdd = dd < 10 ? '0' + String(dd): String(dd);

    let FormattedDate = yyyy + '-' + fmm + '-' + fdd;
    console.log(FormattedDate);
    return FormattedDate;
  }

}
