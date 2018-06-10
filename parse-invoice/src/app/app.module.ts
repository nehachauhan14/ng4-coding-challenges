import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { AppComponent } from './app.component';
import { ParsingServiceService } from './parsing-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ParsingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
