import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private actionSheetCtrl: ActionSheetController,private alertController: AlertController) {}

  async presentactionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Action',
      buttons: [
        {
          text:'Delete',
          role:'destructive',
          data:{
            action:'delete',
          },
        },
        {
          text:'Share',
          data:{
            action:'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ]
    });

await actionSheet.present();

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
        },
      },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
          },
        },
        {
          text:'open action sheet',
          cssClass:'primary',
          handler: async () => {
              const action = await this.actionSheetCtrl.create({
                header: 'Texting Action',
                buttons: [
                  {
                    text:'Test',
                    role:'cancel',
                  },
                ]
          })
          await action.present();
        }
      }],
    });

    await alert.present();
  }
}


