import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(public http: Http) {
    console.log('Hello ProductService Provider');
  }

  findAll() {

  }

}
