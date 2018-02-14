import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading, } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
    public loading: Loading;
    public credentials = { username: '', password: '' };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
          content: 'Por favor, espera...',
          dismissOnPageChange: true
        });
        this.loading.present();
    }

    showError(text) {
        if(this.loading)
            this.loading.dismiss();

        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: text,
          buttons: ['OK']
        });

        alert.present(prompt);
    }

    onSubmit() {
        if(!this.isValid(this.credentials))
            return;

        this.showLoading();
        if(this.credentials.username == 'admin' && this.credentials.password == 'secret') {
            this.navCtrl.setRoot(null);
        } else {
             this.showError('Credenciales incorrectas');
        }
        // this.authProvider.login(this.credentials).then((result: any) => {
        //     if(result.status) {
        //         this.storage.set('staff', result.data.staff);
        //         this.navCtrl.setRoot(TabsPage);
        //     } else {
        //         this.showError(result.message);
        //     }
        // }).catch(error => {
        //     this.showError('Ocurrió un error en el servidor');
        // });
    }

    isValid(credentials: any) {
        if(credentials.username == '') {
            this.showError('Nombre de usuario es requerido');
            return false;
        }

        if(credentials.password == '') {
            this.showError('Contraseña es requerida');
            return false;
        }

        return true;
    }
}
