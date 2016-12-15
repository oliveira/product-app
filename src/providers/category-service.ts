import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = 'https://product-api-oliveiro.c9users.io/api/category';
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUrl + '/' + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
}
