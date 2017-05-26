import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as model1 from "../shared/model1";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private http: Http) {
    http.get('/api/home/test')
      .subscribe(
      (res: Response) => { this.data = res.text() },
      err => console.log,
      () => console.log("done")
      )
  }
  data: string
  name = 'the client = ' + new model1.Model1().a;
}