import {Component, OnDestroy, OnInit} from '@angular/core';
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
    if (message === 'Delete') {
      this.itemsMenu = new Array();
      this.getStorage();
    } else if (message === 'Edit') {
      this.itemsMenu = new Array();
      this.getStorage();
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
