import { Injectable } from '@angular/core';
import { error } from 'selenium-webdriver';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ParsingServiceService {


  constructor() { }

// Function to Write content in output file and download
  writeFile(filename, value ): Observable<any> {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + value);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    return Observable.of('file wrote');
  }

  // Function returns numeric number corresponding 7 segment value 
  mapservice(n): any {
    switch (n) {
      case 63:
        return 0;
      case 6:
        return 1;
      case 91:
        return 2;
      case 79:
        return 3;
      case 102:
        return 4;
      case 109:
        return 5;
      case 125:
        return 6;
      case 7:
        return 7;
      case 127:
        return 8;
      case 111:
        return 9;
      default:
        return 0;
    }
  }

}
