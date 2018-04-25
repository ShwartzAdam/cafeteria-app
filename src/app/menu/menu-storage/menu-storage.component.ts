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
          this.itemsMenu.push(itemTmp);
        });
        console.log(this.itemsMenu);
      });
  }
  removeItemFromMenu(): any {
    console.log('Remove Item From Menu - Start');
  }

  displayModal(action, order): any {
    console.log(action);
    console.log(order);
    if (action === 'Add') {
      console.log('Show Modal To Add Item');
      $('.ui.add.modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
      ;
    } else if (action === 'Edit') {
      console.log('Show Modal To Edit Item');
      $('.ui.large.edit.modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
      ;
    } else if (action === 'Delete') {
      // post delete to server
      console.log('Show Modal To Delete Item');
      $('.ui.confirm.modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal({
          closable  : false,
          onDeny    : function() {
            console.log('Modal return False');
          },
          onApprove : function() {
            console.log('Modal return True');
            // call to item service to delete item id
            // when succesfuly update the table with a listener function
            //
          }
        })
        .modal('show')
      ;
    } else {
      console.log("ERROR");
    }

  }



}
