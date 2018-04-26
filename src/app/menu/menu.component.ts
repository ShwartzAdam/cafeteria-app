import {Component, Input} from '@angular/core';
import {Item} from '../interface/item';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: []
})
export class MenuComponent {
  @Input() item: Item;
  constructor() { }

  onClicked(item) {
    console.log(item);
  }
}
