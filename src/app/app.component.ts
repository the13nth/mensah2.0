import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private swUpdate: SwUpdate,
    private toastController: ToastController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.checkSwUpdate();
  }

  async checkSwUpdate() {
    this.swUpdate.available.subscribe(async evt => {
      const toast = await this.toastController.create({
        header: 'New Version available',
        message: 'Click to update',
        position: 'bottom',
        buttons: [
          {
            side: 'end',
            icon: 'star',
            text: 'Update',
            handler: () => {
              window.location.reload();
            },
          },
        ],
      });
      toast.present();
    });
  }
}
