import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the PhoneValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-phone-validation',
  templateUrl: 'phone-validation.html',
})

export class PhoneValidationPage {
    public code: number;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PhoneValidationPage');
    }

    goBack() {
        this.navCtrl.setRoot(LoginPage);
    }

    validateCode() {
        console.log(this.code);

        // TODO: Validate verification code.

        this.navCtrl.setRoot(MenuPage);
    }
}
