import {Component, Input, OnInit} from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../interface/item';

@Component({
  selector: 'app-item-modal-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
  providers: [ItemService]
})
export class ItemEditComponent implements OnInit {
  @Input() itemid: number;
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
