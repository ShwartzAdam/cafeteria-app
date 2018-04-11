import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../interface/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ItemService]
})
export class MenuComponent implements OnInit {
  // THE ITEMS IN PUBLISHED MENU
  itemsMenu: Item[] = new Array();
  checkedOrderList: boolean[];
  constructor(public itemService: ItemService) { }

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
  removeItemFromMenu(): any {
    console.log('Remove Item From Menu - Start');
  }

}
