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
  }

  todoAleatorio(){
    return this.http.get('https://mate-bachi.000webhostapp.com/api/api/todoaleatorio');
  }

  temas(topic:Number){
    if(topic==1){
      return this.geometria();
    }else if(topic==2){
      return this.algebra();
    }else if(topic==3){
      return this.estadistica();
    }
  }

  algebra(){
    return this.http.get('https://mate-bachi.000webhostapp.com/api/api/algebra');
  }

  estadistica(){
    return this.http.get('https://mate-bachi.000webhostapp.com/api/api/eyp');
  }

  geometria(){
    return this.http.get('https://mate-bachi.000webhostapp.com/api/api/geometria');
  }

  simulacro(){

  }

  anno(ano: Number){
    let tempAno:Number = ano;

    let url:string = 'https://mate-bachi.000webhostapp.com/api/api/anno/' + tempAno;

    return this.http.get(url);
  }
}
