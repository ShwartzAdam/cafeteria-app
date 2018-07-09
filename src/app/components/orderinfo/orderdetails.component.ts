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
  @Input() olid: number;
  public orderListRef: OrderList;
  public orders: Order[] = new Array();
  public items: Item[] = new Array();
  constructor(private orderService: OrderService,
              private orderListService: OrderListService,
              private itemService: ItemService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ( !changes ) {
      return;
    } else {
      this.orderListService.getOrderListById(this.olid).subscribe(
        (res: any) => {
          this.orderListRef = res;
          // console.log(res);
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
