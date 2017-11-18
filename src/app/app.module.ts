import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestingGdaxwebSocketComponent } from './component/testing-gdaxweb-socket/testing-gdaxweb-socket.component';


@NgModule({
  declarations: [
    AppComponent,
    TestingGdaxwebSocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
