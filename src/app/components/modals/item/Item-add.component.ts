import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../classes/item';
import {Supplier} from '../../../classes/supplier';

@Component({
  selector: 'app-item-modal-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css'],
  providers: [ItemService]
})
export class ItemAddComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  public item: Item = new Item;
  public suppliers: Supplier[] = new Array();

  constructor(private itemService: ItemService) {}
  ngOnInit() {

  }

  action(event): void {
    if ( event === 'Upload') {
      this.itemService.createItem(this.item).then(
        res => {
          this.notify.emit('Add');
        });
    }
  }
}
