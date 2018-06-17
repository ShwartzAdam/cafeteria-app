import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {OrderList} from '../../classes/orderlist';
import {OrderListService} from '../../services/orderlist.service';


@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css'],
  providers : [OrderListService]
})
export class OrderCompleteComponent implements OnInit, AfterContentInit {
  // ORDER LIST WITH STATUS 'Completed'
  public elements: OrderList[] = [];
  constructor(public orderListService: OrderListService) { }
  ngOnInit() {
    console.log("ngOnInit - Complete Orders");

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - Complete Orders");
    this.getCompletedOrders();
  }

  getCompletedOrders(): void {
    console.log('Getting Completed Orders !');
    /*
   this.orderListService.getAllOrdersByStatus('Complete').
   then( (_orderList: any) =>  {
     this.orderList = _orderList;
     console.log(this.orderList);

   });
    */
    this.orderListService.getAllOrdersByStatus('Complete').
    then( (_orderList: any) =>  {
      _orderList.forEach( ol => {
        const _ol: OrderList = new OrderList;
        _ol.userid = ol.userid;
        _ol.olid = ol.olid
        _ol.totalprice = ol.totalprice;
        _ol.status = ol.status;
        _ol.ol_dttm = ol.ol_dttm;
        _ol.ol_dttm_real = ol.ol_dttm_real;
        _ol.hasreview = ol.hasreview;
        this.elements.push(_ol);
      });
      console.log(this.elements);
    });

  }

}
