import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { Product } from '../pages/product/product';
import { Category } from '../pages/category/category';

import { CategoryService } from '../providers/category-service';
import { CategoryModalPage } from '../pages/category-modal/category-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Product,
    Category,
    CategoryModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Product,
    Category,
    CategoryModalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, CategoryService]
})
export class AppModule {}
