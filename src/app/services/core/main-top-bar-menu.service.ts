import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string ='assets/json/mainMenu.json'; //se manda llamar la api 

@Injectable({
  providedIn: 'root'
})
export class MainTopBarMenuService {

  constructor(private http: HttpClient) { }

  //creacion de metodo
  getItemsMenu(){
    return this.http.get(endPoint); //retorna libreria esta se va a conectar con la api archivo json para devolver la info y plasmarla en el controlador

  }
}
