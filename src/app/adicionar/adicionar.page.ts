import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {
  textoAdd;
  dataAssistir: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  fechar(){
    this.modalCtrl.dismiss();
  }

  async adicionar(){
    console.log("nome: " + this.textoAdd);
    console.log("data: " + this.dataAssistir);
  }

}
