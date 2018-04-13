import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../interface/item';

@Component({
  selector: 'app-item-modal-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
  providers: [ItemService]
})
export class ItemAddComponent implements OnInit {
  public item: Item = new Item;
  newItem: any;

  constructor(private itemService: ItemService) {}
  ngOnInit() {}

  action(event): void {
    if ( event === 'Upload') {
      console.log('UPLOAD Item');
      console.log(this.item);
      console.log(this.newItem);


    } else {
      console.log('Cancel and exit add Item mod');

    }
  }
}
