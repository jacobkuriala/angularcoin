import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpGdaxService} from '../../http-gdax.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gdax-http',
  templateUrl: './gdax-http.component.html',
  styleUrls: ['./gdax-http.component.css']
})
export class GdaxHttpComponent implements OnInit, OnDestroy {

  result;

  constructor(private httpGdaxService: HttpGdaxService ) {

   }

  ngOnInit() {
    this.result = this.httpGdaxService.getPricesFromCoinDesk().subscribe(
      (response) => { console.log(response)},
      (error) => {console.log('Error')},
      () => {console.log('completed')}
    );
  }

  ngOnDestroy(){
    this.result.unsubscribe();
  }

}
