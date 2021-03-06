/**
 * Item modal - Edit
 *
 */

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../classes/item';

@Component({
  selector: 'app-item-modal-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
  providers: [ItemService]
})
export class ItemEditComponent implements OnInit, OnChanges {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() itemInputEdit: Item;
  public item: Item;
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // when init - init the object
    this.itemInputEdit = new Item;
    this.item = new Item;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ( !changes ) {
        // if there werent any change , return
        return;
    } else {
      // if an event change the object , fetch it and store it in item
      this.item = changes.itemInputEdit.currentValue;
    }
  }

  action(event): void {
    if ( event === 'Upload The Changes') {
      // create the object and update
      this.itemService.updateItem(this.item).then(
        () => {
          this.notify.emit('Edit');
        });
    }
  }
}
