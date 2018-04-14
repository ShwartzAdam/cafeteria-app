import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../interface/item';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-menu-published',
  templateUrl: './menu-published.component.html',
  styleUrls: ['./menu-published.component.css'],
  providers : [ItemService]
})
export class MenuPublishedComponent implements OnInit {

  // THE ITEMS IN PUBLISHED MENU
  itemsMenu: Item[] = new Array();
  checkedOrderList: boolean[];

  // display add item in modal
  showAddItem: boolean = false;

  constructor(public itemService: ItemService) {}

  ngOnInit() {
    this.getPublishedMenu();
  }
  getPublishedMenu(): any {
    this.itemService.getAllItems().subscribe(
      items => {
        items.forEach(item => {
          const itemTmp = new Item(item);
          console.log(itemTmp);
          this.itemsMenu.push(itemTmp);
        });
        console.log(this.itemsMenu);
        this.checkedOrderList = new Array(this.itemsMenu.length).fill(false);
      });
  }

}
