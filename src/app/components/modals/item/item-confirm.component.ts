/**
 * Item modal - Confirm
 *
 */

import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../classes/item';

@Component({
  selector: 'app-item-modal-confirm',
  templateUrl: './item-confirm.component.html',
  styleUrls: ['./item-confirm.component.css'],
  providers: [ItemService]
})
export class ItemConfirmComponent implements OnChanges {
  @Input() itemInputDelete: Item = new Item;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  public item: Item = new Item;
  constructor(private itemService: ItemService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      // if there werent any change , return
      return;
    } else {
      // if an event change the object , fetch it and store it in item
      this.item = changes.itemInputDelete.currentValue;
    }
  }

  action(event): void {
    if ( event === 'Ok') {
      this.itemService.deleteItem(this.item.itemid).then(
        () => {
          // event to tell the table to referesh
          this.notify.emit('Delete');
        });
    }
  }
}
