import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';

/*
  Generated class for the PreguntasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PreguntasProvider {

  constructor(public http: HttpClient) {
  }

  todoAleatorio(topic:Number){
    let url:string;
    url = 'http://faroadmin-001-site1.ftempurl.com/api/api/todoaleatorio/'+topic;
    return this.http.get(url);
  }

  simulacro(topic:Number){
    let url:string;
    url = 'http://faroadmin-001-site1.ftempurl.com/api/api/simulacro/'+topic;
    return this.http.get(url);
  }

  

}
