import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../models/pizza';

import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera'



@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  public base64Image: string;

  pizza: Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice, private camera: Camera) {
    this.pizza = this.navParams.data.var1;
  }

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  updating() {
    this.pizzaservice.update(this.pizza).then((item) => {
      this.navCtrl.push(HomePage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

}
