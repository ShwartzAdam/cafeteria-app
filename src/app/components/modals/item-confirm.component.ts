import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../interface/item';

@Component({
  selector: 'app-item-modal-confirm',
  templateUrl: './item-confirm.component.html',
  styleUrls: ['./item-confirm.component.css'],
  providers: [ItemService]
})
export class ItemConfirmComponent implements OnInit {
  public item: Item = new Item;

  constructor(private itemService: ItemService) {}
  ngOnInit() {}

  action(event): void {
    if ( event === 'Upload The Changes') {
      console.log('UPLOAD changed Item');
      console.log(this.item);


    } else {
      console.log('Cancel and exit add Item mod');

    }
  }
}
