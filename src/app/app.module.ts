import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScoresPage} from '../pages/scores/scores';
import { LoginPage} from '../pages/login/login';
import { StudentRegistrationPage} from '../pages/student-registration/student-registration';
import { LogoutPage} from '../pages/logout/logout';
import { AboutPage } from '../pages/about/about';
import { QExamsPage} from '../pages/q-exams/q-exams';
import { QRandomPage } from '../pages/q-random/q-random';
import { QSimulationPage} from '../pages/q-simulation/q-simulation';
import { QTopicsPage } from '../pages/q-topics/q-topics';
import { GeometryPage } from '../pages/geometry/geometry';
import { AlgebraPage} from '../pages/algebra/algebra';
import { CienciasPage } from '../pages/ciencias/ciencias';
import { MatematicaPage } from "../pages/matematica/matematica";
import { EstudiosSocialesPage } from "../pages/estudios-sociales/estudios-sociales";
import { EspanolPage } from "../pages/espanol/espanol";
import { StadisticsPage } from '../pages/stadistics/stadistics';
import {SliderPage } from '../pages/slider/slider';
import {ConectionErrorPage} from '../pages/conection-error/conection-error';

import { MathJaxDirective } from '../directives/math-jax/math-jax';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuProvider } from '../providers/menu/menu';
import { PreguntasProvider } from '../providers/preguntas/preguntas';

import {AccordionComponent } from '../components/accordion/accordion';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScoresPage,
    LoginPage,
    StudentRegistrationPage,
    LogoutPage,
    AboutPage,
    QExamsPage,
    QRandomPage,
    QSimulationPage,
    QTopicsPage,
    GeometryPage,
    AlgebraPage,
    StadisticsPage,
    MathJaxDirective,
    AccordionComponent,
    SliderPage,
    ConectionErrorPage,
    CienciasPage,
    EstudiosSocialesPage,
    MatematicaPage,
    EspanolPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScoresPage,
    LoginPage,
    StudentRegistrationPage,
    LogoutPage,
    AboutPage,
    QExamsPage,
    QRandomPage,
    QSimulationPage,
    QTopicsPage,
    GeometryPage,
    AlgebraPage,
    StadisticsPage,
    SliderPage,
    ConectionErrorPage,
    CienciasPage,
    EstudiosSocialesPage,
    EspanolPage,
    MatematicaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    MenuProvider,
    HttpClient,
    PreguntasProvider,
  ]
})
export class AppModule {}
