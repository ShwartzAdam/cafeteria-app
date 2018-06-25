///<reference path="../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../classes/item';

@Component({
  selector: 'app-item-modal-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
  providers: [ItemService]
})
export class ItemEditComponent implements OnInit, OnChanges, OnDestroy {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() itemInputEdit: Item;
  public item: Item;
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemInputEdit = new Item;
    this.item = new Item;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ( !changes ) {
        return;
    } else {
      console.log(changes.itemInputEdit.currentValue);
      this.item = changes.itemInputEdit.currentValue;
    }
  }
  ngOnDestroy(): void {
    console.log(event);
  }

  action(event): void {
    if ( event === 'Upload The Changes') {
      console.log('UPLOAD changed Item');
      console.log(this.item);
      // create the object and update
      this.itemService.updateItem(this.item).then(
        res => {
          console.log(res);
          this.notify.emit('Edit');
        });
    } else {
      console.log('Cancel and exit add Item mod');

    }
  }


}
