import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { AdicionarPage } from '../adicionar/adicionar.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  textoAdd: string = '';
  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  async adicionar(){
    const modal = await this.modalCtrl.create({
      component: AdicionarPage,
      componentProps: { 
        textoAdd: this.textoAdd,
      }
    });
    return await modal.present();
  }

}
