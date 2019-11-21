import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from './models/value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'TesadufNg';
  /**
   *
   */
  constructor(private http: HttpClient) { }
  veriler: Value;

  path = 'https://localhost:44385/api/tesaduf';
  sayac = 0;
  public deneme = 0;



  public getValues() {
    return this.http.get<Value>(this.path).subscribe((response: Value) => this.veriler = {
      sayac : response['0'],
      gelenDeger : response['1'],
    },  (err) => {
      console.error('hata!');
    });
  }

  public Tesadufen() {
    this.getValues();
    this.sayac++;
  }


}
