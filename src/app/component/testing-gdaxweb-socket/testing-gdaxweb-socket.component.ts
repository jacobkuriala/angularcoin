import { Component, OnInit, OnDestroy } from '@angular/core';
import { JsonPipe } from '@angular/common/src/pipes';

@Component({
  selector: 'app-testing-gdaxweb-socket',
  templateUrl: './testing-gdaxweb-socket.component.html',
  styleUrls: ['./testing-gdaxweb-socket.component.css']
})
export class TestingGdaxwebSocketComponent implements OnInit,OnDestroy {

  socket: WebSocket;
  currentBTCUSD:number;
  currentLTCUSD:number;
  currentETHUSD:number;
  constructor() { }

  ngOnInit() {
     console.log(this.socket);
    if(!this.socket || this.socket.readyState !== WebSocket.OPEN){
      this.createSocket();
    }
  }

  createSocket(){
    // realtime
    this.socket = new WebSocket('wss://ws-feed.gdax.com');
    // sandbox
    // this.socket = new WebSocket('wss://ws-feed-public.sandbox.gdax.com');
    let subrequest = {
      "type": "subscribe",
      "product_ids": [
          "BTC-USD",
          "ETH-USD",
          "LTC-USD"
      ],
      "channels": [
          {
              "name": "ticker"
          }
      ]
    };

    this.socket.onopen =  () => {
      console.log(subrequest);
      this.socket.send(JSON.stringify(subrequest));
      console.log('stream opened');
    };
    this.socket.onmessage = (message) => {
      if(message.data){
        let data = JSON.parse(message.data);
        if(data.type === "ticker"){
          console.log(data);
          if(data.product_id === "BTC-USD")
            this.currentBTCUSD = data.price;
          else if(data.product_id === "ETH-USD")
            this.currentETHUSD = data.price;
            else if(data.product_id === "LTC-USD")
            this.currentLTCUSD = data.price;
        }else{
          console.log(message);
        }

      };
    }
  }

  unsubscribe(){
    if(this.socket){
      let unsubrequest = // Request
      {
          "type": "unsubscribe",
          "channels": ["ticker"]
      };
      this.socket.send(JSON.stringify(unsubrequest));
    }
  }

  ngOnDestroy(){
    this.unsubscribe();
  }

  onStartStream() {
    // console.log(this.socket);
    // if(!this.socket || this.socket.readyState !== WebSocket.OPEN){
    //   this.createSocket();
    // }
  }

  onEndStream() {
    this.unsubscribe();
  }

}

