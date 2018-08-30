/**
 * orderlist details component - show order list details to mangager/emp
 *
 */
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OrderList} from '../../classes/orderlist';
import {OrderService} from '../../services/order.service';
import {ItemService} from '../../services/item.service';
import {OrderListService} from '../../services/orderlist.service';
import {Order} from '../../classes/order';
import {Item} from '../../classes/item';

@Component({
  selector: 'app-order-details',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css'],
  providers: [OrderService, ItemService, OrderListService]
})
export class OrderDetailsComponent implements OnChanges {
  // input order list id
  @Input() olid: number;
  // hold order list object
  public orderListRef: OrderList;
  // arr of orders
  public orders: Order[] = new Array();
  // arr of items
  public items: Item[] = new Array();
  constructor(private orderService: OrderService,
              private orderListService: OrderListService,
              private itemService: ItemService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ( !changes ) {
      // if there werent any change , return
      return;
    } else {
      // if an event change the object , fetch it and store it
      this.orderListService.getOrderListById(this.olid).subscribe(
        (res: any) => {
          this.orderListRef = res;
        });
      this.olid = changes.olid.currentValue;
      this.orderService.getOrdersByOrderListId(this.olid).then(
        (resOrders: any ) => {
          resOrders.forEach( order => {
            let _order: Order = new Order;
            _order.orderid = order.orderid;
            _order.olid = order.olid;
            _order.itemid = order.itemid;
            _order.qty = order.qty;
            this.orders.push(_order);
          });
          this.orders.forEach( order => {
            this.itemService.getItemById(order.itemid).then(
              (resItem: any) => {
                let _item: Item = new Item;
                _item.itemid = order.itemid;
                _item.name = resItem.name;
                _item.price = resItem.price;
                this.items.push(_item);
              });
          });
        });
    }
  }
}
