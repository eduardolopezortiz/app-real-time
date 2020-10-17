import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';

declare var App: any;//mandamos llmar  la variable App de la funcion  del archivo js 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private menuSvc: MainTopBarMenuService) {


  }

  title = 'app-real-time2';
  miempresa: string = 'DeLaSalleBajio';//aqui se declaran variables con el nombre y año que apareceran en el footer
  periodo: number = 2020;

  menuItems: any[] = [];




  ngOnInit() {
    //load SideBar Script
    App.init();
    //load data
    this.getData();
  }

  getData() {
    this.menuSvc.getItemsMenu().subscribe((data: any) =>{
      this.menuItems = data;
    });
    

  }
   listenChildMenuEvent (eventArgs: any){
    console.log('los datos emitidos por el componente hijo son: ', eventArgs);
    console.log('el inidice selccionado en el papa es: ', eventArgs.index);
    console.log('el inidice selccionado en el papa es: ', eventArgs.item);


   }



}

  
