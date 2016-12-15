import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class Product {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProductPage Page');
  }

}
