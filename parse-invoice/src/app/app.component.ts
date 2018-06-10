import { Component , ElementRef } from '@angular/core';
import {ParsingServiceService} from './parsing-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileText = '';
  retVal = '';

  constructor(private _service: ParsingServiceService) {
  }

  // Method to Upload Input file and get its content

  fileUpload(event) {
    const reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    const me = this;
    reader.onload = function () {
      me.fileText = reader.result;
      console.log(me.fileText);
    };
  }

  // Method to return value if Undefined

  retValueFun() {
    if (typeof this.retVal === undefined) {
      return '';
    } else {
      return this.retVal;
    }
  }

 // Method to parse input file content to 7 segment

   get7segment = function () {
    const lines = this.fileText.split('\n');
    for (let line = 0; line < lines.length; line = line + 2) {
      const arr = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ]; // Defining 2D array 9 numbers and 7 segments
      let k = 0;
      if (lines[line] == null || lines[line] === undefined) {
        continue;
      }
      let a = lines[line].split('');
      for (let i = 1; i < a.length; i++) {
        if (a[i] === '_') {
          arr[k][0] = true;
        }
        i++;
        i++;
        k++;
      }
      if (line < lines.length) {
        line++;
        if (lines[line] == null || lines[line] === undefined) {
          continue;
        }
        a = lines[line].split('');
        k = 0;
        for ( let i = 0; i < a.length; i++) {
          if (a[i] === '|') {
            arr[k][5] = true;
          }
          i++;
          if (a[i] === '_') {
            arr[k][6] = true;
          }
          i++;
          if (a[i] === '|') {
            arr[k][1] = true;
          }
          k++;
        }
      }
      if (line < lines.length) {
        line++;
        if (lines[line] == null || lines[line] === undefined) {
          continue;
        }
        a = lines[line].split('');
        k = 0;
        for (let i = 0; i < a.length; i++) {
          if (a[i] === '|') {
            arr[k][4] = true;
          }
          i++;
          if (a[i] === '_') {
            arr[k][3] = true;
          }
          i++;
          if (a[i] === '|') {
            arr[k][2] = true;
          }
          k++;
        }
      }
      for (let t = 0; t < arr.length; t++) {
        let result = 0;
        for (let u = 0; u < arr[t].length; u++) {
          if (arr[t][u]) {
            result += Math.pow(2, u);
          }
        }
        const res = this.map(result) + '';
        this.retVal += res;
        // console.log(res);
      }
      this.retVal += '\r\n';
    }
    console.log('retVal' + this.retVal);
    this.writeParsedInvoice('output_user_story_2.txt', this.retVal);
    return this.retVal;
  };

  // Method to write output content in a file having name filename

  writeParsedInvoice = function(filename, value) {
    this._service.writeFile(filename , value).subscribe(response  => {
      console.log(response);
    });
  };

  // Method that returns number based on weights of the segment.

  map = function (n) {
    return this._service.mapservice(n);
  };

}
