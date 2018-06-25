import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {OrderListService} from '../../../services/orderlist.service';
import {IMyDateRangeModel, IMyDrpOptions} from 'mydaterangepicker';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QueryService} from '../../../services/query.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface OrdersDate {
  userid: number;
  fullname: string;
  olid: number;
  ol_dttm: string;
  ol_dttm_real: string;
  totalprice: number;
}
@Component({
  selector: 'app-date-picker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [QueryService]
})
export class DatePickerComponent implements OnInit, AfterContentInit {
  public ordersArray: OrdersDate[] = [];
  public displayedColumns = ['userid' , 'fullname' , 'olid' , 'ol_dttm', 'ol_dttm_real', 'totalprice' ];
  public dataSource: any ;
  public displayTable: boolean = false;
  @ViewChild('paging') paginator: MatPaginator;
  public myForm: FormGroup;
  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd.mm.yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '34px',
    width: '100%',
    inline: false,
    alignSelectorRight: false,
    indicateInvalidDateRange: true
  };

  constructor(private orderListSer: OrderListService,
              private formBuilder: FormBuilder,
              private queryService: QueryService) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      // Empty string means no initial value. Can be also specific date range for example:
      // {beginDate: {year: 2018, month: 10, day: 9}, endDate: {year: 2018, month: 10, day: 19}}
      // which sets this date range to initial value. It is also possible to set initial
      // value using the selDateRange attribute.

      myDateRange: ['', Validators.required]
      // other controls are here...
    });
  }

  ngAfterContentInit(): void {}

  onDateRangeChanged(event: IMyDateRangeModel) {
    if ( this.ordersArray ) {
      console.log(this.ordersArray);
      this.ordersArray = new Array();
    }
    console.log(event.beginDate);
    console.log(event.endDate);
    console.log(event.formatted);
    let rangeStart = new Date(Date.UTC(event.beginDate.year,  event.beginDate.month - 1,  event.beginDate.day )).toISOString();
    let rangeEnd = new Date(Date.UTC(event.endDate.year,  event.endDate.month - 1,  event.endDate.day )).toISOString();
    console.log(rangeEnd);
    console.log(rangeStart);
    this.queryService.getDateRange(rangeStart, rangeEnd).subscribe(
      orderArr => {
        console.log(orderArr);
        orderArr.forEach( or => {
          this.ordersArray.push(or);
        });
        this.dataSource = new MatTableDataSource<OrdersDate>(this.ordersArray);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.displayTable = true;
        });
      });
    // event properties are: event.beginDate, event.endDate, event.formatted,
    // event.beginEpoc and event.endEpoc
  }
}
