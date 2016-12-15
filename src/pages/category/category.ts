import { Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CategoryService } from './../../providers/category-service'

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})

export class Category {

  categories: Array<any>;
  constructor(public navCtrl: NavController, private categoryService: CategoryService, public alertCtrl: AlertController) {
    this.findAll();
  }

  findAll() {
    this.categoryService.findAll()
      .then((categories: Array<any>) => {
        this.categories = categories;
      }, (error) => {
        console.log('Erro ao listar categorias: ', error);
      })
  }

  removeCategory(category) {
    let alert = this.alertCtrl.create({
      title: 'Deletar Categoria',
      message: 'Deseja realmente deletar a categoria \'' + category.nome + '\'?',
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Deletar',
          handler: (data) => {
            this.categoryService.delete(category.id)
              .then((res) => {
                if (res) {
                  this.findAll();
                }
              }, (error) => {
                console.log('Erro ao deletar categoria', error)
              })
          }
        }
      ]
    });
  }
}
