import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ScoresPage} from '../../pages/scores/scores';
import { HomePage } from '../../pages/home/home';
import { LogoutPage } from '../../pages/logout/logout';
import { AboutPage } from '../../pages/about/about';

@Injectable()
export class MenuProvider {

  constructor(public http: HttpClient) { }

  getSideMenus() {
    return [{
      title: 'Inicio', component: HomePage
    },
    {
      title: 'Preguntas',
      subPages: [{
        title: 'Todo Aleatorio',
        component: ScoresPage,
      }, {
        title: 'Por Temas',
        component: LogoutPage,
      }, {
        title: 'Simular Examen',
        component: LogoutPage,
      }, {
        title: 'Examenes Anteriores',
        component: LogoutPage,
      }]
    },{
      title: 'Resultados',
      subPages: [{
        title: 'Todo Aleatorio',
        component: ScoresPage,
      }, {
        title: 'Por Temas',
        component: LogoutPage,
      }, {
        title: 'Simular Examen',
        component: LogoutPage,
      }, {
        title: 'Examenes Anteriores',
        component: LogoutPage,
      }]
    },{
      title: 'Temas de examen',
      subPages: [{
        title: 'Geometria',
        component: ScoresPage,
      }, {
        title: 'Algebra',
        component: LogoutPage,
      }, {
        title: 'Estaditica y Probabilidad',
        component: LogoutPage,
      }]
    },{
      title: 'Sobre Nosotros', component: AboutPage
    },{
      title: 'Cerrar sesión', component: LogoutPage
    }];
  }
}