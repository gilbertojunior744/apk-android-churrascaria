import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title:'Lanches',
      url:'lanches',
      icon: 'pizza'
    },
    {
      title: 'Principal',
      url:'principais',
      icon:'restaurant'
    },
    {
      title:'Entradas',
      url:'entradas',
      icon:'restaurant'
    },
    {
      title:'Bebidas',
      url:'bebidas',
      icon:'beer'
    },
    {
      title:'Sobremesas',
      url:'sobremesas',
      icon:'ice-cream'
    },
    {
      title:'Exit',
      role:'ionic.Platform.exitApp();',
      icon:'Exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
