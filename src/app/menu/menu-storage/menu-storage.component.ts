import {Component, OnDestroy, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../classes/item';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-menu-storage',
  templateUrl: './menu-storage.component.html',
  styleUrls: ['./menu-storage.component.css'],
  providers : [ItemService]
})
export class MenuStorageComponent implements OnInit, OnDestroy {

  public editItem: Item;
  public deleteItem: Item;
  // THE ITEMS IN PUBLISHED MENU
  itemsMenu: Item[] = new Array();

  constructor(public itemService: ItemService) {
    this.editItem = new Item;
    this.deleteItem = new Item;
  }
  onNotifyClicked(message: string): void {
    this.itemsMenu = new Array();
    this.getStorage();
    if (message === 'Delete') {
      jQuery.uiAlert({
        textHead: 'Item notification', // header
        text: 'An item was delete from the storage successfully', // Text
        bgcolor: '#19c3aa', // background-color
        textcolor: '#fff', // color
        position: 'top-right', // position . top And bottom ||  left / center / right
        icon: 'checkmark box', // icon in semantic-UI
        time: 5, // time
      });
    } else if (message === 'Edit') {
      jQuery.uiAlert({
        textHead: 'Item notification', // header
        text: 'An item was edit successfully', // Text
        bgcolor: '#19c3aa', // background-color
        textcolor: '#fff', // color
        position: 'top-right', // position . top And bottom ||  left / center / right
        icon: 'checkmark box', // icon in semantic-UI
        time: 5, // time
      });
    } else if (message === 'Add') {
      jQuery.uiAlert({
        textHead: 'Item notification', // header
        text: 'An item was added successfully', // Text
        bgcolor: '#19c3aa', // background-color
        textcolor: '#fff', // color
        position: 'top-right', // position . top And bottom ||  left / center / right
        icon: 'checkmark box', // icon in semantic-UI
        time: 5, // time
      });
    }
  }

  ngOnInit() {
    this.getStorage();
  }

  ngOnDestroy(): void {
    console.log('exit Menu Storage');
    $( '.ui.edit.modal' ).remove();
    $( '.ui.add.modal' ).remove();
    $( '.ui.confirm.modal' ).remove();
  }

  public getStorage(): any {
    jQuery.uiAlert({
      textHead: 'Storage', // header
      text: 'Storage table has been updated successfully', // Text
      bgcolor: '#55a9ee', // background-color
      textcolor: '#fff', // color
      position: 'top-left', // position . top And bottom ||  left / center / right
      icon: 'info circle', // icon in semantic-UI
      time: 5, // time
    });
    this.itemService.getAllItems().then(
      (items: any) => {
        items.forEach(item => {
          const itemTmp = new Item(item);
          this.itemsMenu.push(itemTmp);
        });
        console.log(this.itemsMenu);
      });
  }

  public displayModal(action, item): any {
    console.log(action);
    console.log(item);
    if (action === 'Add') {
      console.log('Show Modal To Add Item');
      $('.ui.add.modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
      ;
    } else if (action === 'Edit') {
      console.log('Show Modal To Edit Item');
      // update the modal with item
      this.editItem = item;
      console.log(this.editItem);
      $('.ui.edit.modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
      ;
    } else if (action === 'Delete') {
      // post delete to server
      this.deleteItem = item;
      console.log('Show Modal To Delete Item');
      $('.ui.confirm.modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
      ;
    } else {
      console.log('ERROR');
    }

  }



}
