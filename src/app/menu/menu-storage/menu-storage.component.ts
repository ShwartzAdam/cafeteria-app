import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../interface/item';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-menu-storage',
  templateUrl: './menu-storage.component.html',
  styleUrls: ['./menu-storage.component.css'],
  providers : [ItemService]
})
export class MenuStorageComponent implements OnInit {

  // THE ITEMS IN PUBLISHED MENU
  itemsMenu: Item[] = new Array();
  checkedOrderList: boolean[];

  // display add item in modal
  showAddItem: boolean = false;

  constructor(public itemService: ItemService) {}

  ngOnInit() {
    this.getStorage();
  }

  getStorage(): any {
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
  displayModal(event): any {
    if (event === 'Add') {
      console.log('Show Modal To Add Item');
      $('.ui.add.modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
      ;
    } else {
      console.log('Show Modal To Edit Item');
      $('.ui.edit.modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
      ;
    }

  }

}
