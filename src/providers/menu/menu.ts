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
import { CienciasPage } from '../../pages/ciencias/ciencias';
import { MatematicaPage } from "../../pages/matematica/matematica";
import { EstudiosSocialesPage } from "../../pages/estudios-sociales/estudios-sociales";
import { EspanolPage } from "../../pages/espanol/espanol";

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
      title: 'Asignaturas',
      subPages: [{
        title: 'Español',
        component: EspanolPage,
        icon: 'md-bookmarks',
      }, {
        title: 'Matemática',
        component: MatematicaPage,
        icon: 'stats',
      }, {
        title: 'Ciencias',
        component: CienciasPage,
        icon: 'body',
      }, {
        title: 'Estudios Sociales',
        component: EstudiosSocialesPage,
        icon: 'map',
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