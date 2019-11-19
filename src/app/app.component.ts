import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from './models/value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'TesadufNg';
  /**
   *
   */
  constructor(private http: HttpClient) { }
  values: Value[] = [];

  // ngOnInit() {
    // this.getValues();
  // }

  public getValues() {
    return this.http.get<Value>('https://localhost:44385/api/tesaduf');
  }

  public Tesadufen() {
    this.getValues();
  }


}
