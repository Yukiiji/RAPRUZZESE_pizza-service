import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';
import { HomePage } from '../home/home';

import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  public base64Image: string;
  pizza: Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice, private camera: Camera) {

  }

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  addPizza = [];

  add() {
    if (this.addPizza['price'] == null) {
      this.pizza.price =+ 0;
    }
    else {
      this.pizza.price =+ this.addPizza['price'];
    }
    this.pizza.name = this.addPizza['name'];
    this.pizza.desc = this.addPizza['desc'];

    console.log(this.pizza);
    this.pizzaservice.add(this.pizza).then((item) => {
      this.navCtrl.push(HomePage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
