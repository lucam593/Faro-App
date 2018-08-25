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
      title: 'Inicio', component: HomePage
    },
    {
      title: 'Preguntas',
      subPages: [{
        title: 'Todo Aleatorio',
        component: QRandomPage,
      }, {
        title: 'Por Temas',
        component: QTopicsPage,
      }, {
        title: 'Simular Examen',
        component: QSimulationPage,
      }, {
        title: 'Examenes Anteriores',
        component: QExamsPage,
      }]
    },{
      title: 'Resultados',component: ScoresPage
    },{
      title: 'Temas de examen',
      subPages: [{
        title: 'Geometria',
        component: GeometryPage,
      }, {
        title: 'Algebra',
        component: AlgebraPage,
      }, {
        title: 'Estaditica y Probabilidad',
        component: StadisticsPage,
      }]
    },{
      title: 'Sobre Nosotros', component: AboutPage
    },{
      title: 'Cerrar sesión', component: LogoutPage
    }];
  }
}