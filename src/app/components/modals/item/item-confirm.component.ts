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
      return;
    } else {
      console.log(changes.itemInputDelete.currentValue);
      this.item = changes.itemInputDelete.currentValue;
    }
  }

  action(event): void {
    if ( event === 'Ok') {
      console.log('Delete Item : ' + this.item.itemid);
      this.itemService.deleteItem(this.item.itemid).then(
        res => {
          console.log(res);
          this.notify.emit('Delete');
          // event to tell the table to referesh
        });
    } else {
      console.log('Exit Confirm Modal');

    }
  }
}
