import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ScoresPage} from '../../pages/scores/scores';
import { HomePage } from '../../pages/home/home';
import { LogoutPage } from '../../pages/logout/logout';
import { AboutPage } from '../../pages/about/about';
import { QExamsPage} from '../../pages/q-exams/q-exams';
import { QRandomPage } from '../../pages/q-random/q-random';
import { QSimulationPage} from '../../pages/q-simulation/q-simulation';
import { QTopicsPage } from '../../pages/q-topics/q-topics';
import { GeometryPage } from '../../pages/geometry/geometry';
import { AlgebraPage} from '../../pages/algebra/algebra';
import { StadisticsPage } from '../../pages/stadistics/stadistics';



@Injectable()
export class MenuProvider {

  constructor(public http: HttpClient) { }

  getSideMenus() {
    return [{
      title: 'Inicio', 
      component: HomePage,
      icon: 'home',
    },
    {
      title: 'Preguntas',
      subPages: [{
        title: 'Aleatorio ',
        component: QRandomPage,
        icon: 'shuffle',
      }, {
        title: 'Temas',
        component: QTopicsPage,
        icon: 'book',
      }, {
        title: 'Simulación',
        component: QSimulationPage,
        icon: 'clipboard',
      }, {
        title: 'Anteriores',
        component: QExamsPage,
        icon: 'return-left',
      }]
    },{
      title: 'Resultados',
      component: ScoresPage,
      icon: 'podium',
    },{
      title: 'Temas',
      subPages: [{
        title: 'Geometria',
        component: GeometryPage,
        icon: 'cube',
      }, {
        title: 'Algebra',
        component: AlgebraPage,
        icon: 'move',
      }, {
        title: 'Estaditica y Probabilidad',
        component: StadisticsPage,
        icon: 'stats',
      }]
    },{
      title: 'Sobre Nosotros', 
      component: AboutPage,
      icon: 'alert',
    },{
      title: 'Cerrar sesión', 
      component: LogoutPage,
      icon: 'log-out',
    }];
  }
}