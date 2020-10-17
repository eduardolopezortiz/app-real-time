import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'naavigation-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  //declarations
  @Input() empresa: string;
  @Input() anio: number;
  

  ngOnInit(): void {
  }

}
