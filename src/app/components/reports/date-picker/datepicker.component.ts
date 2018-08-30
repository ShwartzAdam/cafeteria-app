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

      myDateRange: ['', Validators.required]
    });
  }

  ngAfterContentInit(): void {}

  onDateRangeChanged(event: IMyDateRangeModel) {
    if ( this.ordersArray ) {
      this.ordersArray = new Array();
    }
    const rangeStart = new Date(Date.UTC(event.beginDate.year,  event.beginDate.month - 1,  event.beginDate.day )).toISOString();
    const rangeEnd = new Date(Date.UTC(event.endDate.year,  event.endDate.month - 1,  event.endDate.day )).toISOString();

    this.queryService.getDateRange(rangeStart, rangeEnd).subscribe(
      orderArr => {
        orderArr.forEach( or => {
          this.ordersArray.push(or);
        });
        this.dataSource = new MatTableDataSource<OrdersDate>(this.ordersArray);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.displayTable = true;
        });
      });
  }
}
