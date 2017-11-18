import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common/src/pipes';

@Component({
  selector: 'app-testing-gdaxweb-socket',
  templateUrl: './testing-gdaxweb-socket.component.html',
  styleUrls: ['./testing-gdaxweb-socket.component.css']
})
export class TestingGdaxwebSocketComponent implements OnInit {

  socket: WebSocket;

  constructor() { }

  ngOnInit() {
    this.createSocket();
  }

  createSocket(){
    this.socket = new WebSocket('wss://ws-feed.gdax.com');
    this.socket.onopen =  () => { console.log('stream opened') };

    this.socket.onmessage = (message) => {console.log(message)};
  }

  noOnDestroy(){

  }

  onStartStream() {
    console.log(this.socket);
    if(this.socket.readyState !== WebSocket.OPEN){
      this.createSocket();
    }
    let subrequest = {
      "type": "subscribe",
      "product_ids": [
          "ETH-USD",
          "ETH-EUR"
      ],
      "channels": [
          {
              "name": "ticker",
              "product_ids": [
                  "ETH-BTC"
              ]
          }
      ]
  };

  this.socket.send(JSON.stringify(subrequest));

  }

  onEndStream() {

    let unsubrequest = // Request
    {
        "type": "unsubscribe",
        "channels": ["ticker"]
    };
    this.socket.send(JSON.stringify(unsubrequest));
  }

}
