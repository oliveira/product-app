import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from './../../pages/product/product';
import { Category } from './../../pages/category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabRoot1: any;
  tabRoot2: any;
  constructor(public navCtrl: NavController) {
    this.tabRoot1 = Product;
    this.tabRoot2 = Category;
  }

}
