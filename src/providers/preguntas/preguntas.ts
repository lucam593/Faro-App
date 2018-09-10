import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the PreguntasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PreguntasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PreguntasProvider Provider');
  }

  todoAleatorio(){
    return this.http.get('http://127.0.0.1:8000/api/api/todoaleatorio');
  }

  algebra(){
    return this.http.get('https://mate-bachi.000webhostapp.com/matebachi/algebra');
  }

  estadistica(){
    return this.http.get('https://mate-bachi.000webhostapp.com/matebachi/algebra');
  }

  geometria(){
    return this.http.get('https://mate-bachi.000webhostapp.com/matebachi/geometria');
  }

  simulacro(){

  }

  anno(ano: number){
    let tempAno:number = ano;

    let url:string = 'https://mate-bachi.000webhostapp.com/matebachi/anno/' + tempAno;

    return this.http.get(url);
  }
}
