import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuProvider } from '../providers/menu/menu';


import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: any;

  // Selected Side Menu
  selectedMenu: any;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuProvider: MenuProvider,
    public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.getSideMenuData();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getSideMenuData() {
    this.pages = this.menuProvider.getSideMenus();
  }

  openPage(page, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {
      this.nav.setRoot(page.component);
      this.menuCtrl.close();
    } else {
      if (this.selectedMenu) {
        this.selectedMenu = 0;
      } else {
        this.selectedMenu = index;
      }
    }
  }
}
