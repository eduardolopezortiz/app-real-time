import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() menuProfileItems: any[]=[];//aqui se va a recibir la info 
  @Output() onClickMenu: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onclick_menu(index: number, item: any){
    console.log('el indice seleccionado en el hijo es: ', index);
    console.log('el indice seleccionado en el hijo es: ', item);
    this.onClickMenu.emit({
      index,
      name: item.title
    });

  }

}
