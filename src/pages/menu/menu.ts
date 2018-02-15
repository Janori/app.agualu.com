import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
    rootPage: any = HomePage;
    pages: Array<{title: string, component: any, icon: string}>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.pages = [
            { title: 'Inicio', component: HomePage, icon: 'home'},
            { title: 'Red', component: HomePage, icon: 'people'},
            { title: 'Compra Agua', component: HomePage, icon: 'water'},
            { title: 'Mapa máquinas', component: HomePage, icon: 'pin'},
            { title: 'Mis máquinas', component: HomePage, icon: 'build'},
            { title: 'Mi perfil', component: HomePage, icon: 'person'},
            { title: 'Ayuda', component: HomePage, icon: 'help-circle'},
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuPage');
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.rootPage = page;
    }

}
