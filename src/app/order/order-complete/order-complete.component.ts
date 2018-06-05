import {AfterContentInit, Component, OnInit} from '@angular/core';
import {OrderList} from '../../interface/orderlist';
import {OrderListService} from '../../services/orderlist.service';
import {Subject} from "rxjs/Subject";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css'],
  providers : [OrderListService]
})
export class OrderCompleteComponent implements OnInit, AfterContentInit {

  // ORDER LIST WITH STATUS 'Completed'
  private orderList: OrderList[] = [];
  dtOptionsComp: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(public orderListService: OrderListService) { }
  ngOnInit() {
    console.log("ngOnInit - Complete Orders");
    this.dtOptionsComp = {
      searching: false,
      ordering:  false,
      info: false,
      pageLength: 5,
      pagingType: 'full_numbers',
      retrieve: true,
      lengthChange: false
    };
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
         this.orderList.push(_ol);
         setTimeout(function() {
           this.dtTrigger.next();
           }.bind(this));
       });
       console.log(this.orderList);
     });

  }

}
