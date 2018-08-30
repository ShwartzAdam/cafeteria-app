/**
 * Item modal - Add
 *
 */

import {Component, EventEmitter, Output} from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../classes/item';

@Component({
  selector: 'app-item-modal-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
  providers: [ItemService]
})
export class ItemAddComponent {
  // output event to notify about new item
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  public item: Item = new Item;

  constructor(private itemService: ItemService) {}

  action(event): void {
    if ( event === 'Upload') {
      this.itemService.createItem(this.item).then(
        () => {
          this.notify.emit('Add');
        });
    }
  }
}
