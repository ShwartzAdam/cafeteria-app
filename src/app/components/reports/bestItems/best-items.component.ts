import {AfterContentInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {QueryService} from '../../../services/query.service';

export interface BestItem {
  itemid: number;
  name: string;
  price: number;
  total: number;
}

@Component({
  selector: 'app-charts-items',
  templateUrl: './best-items.component.html',
  styleUrls: ['./best-items.component.css'],
  providers: [QueryService]
})
export class BestItemsComponent implements OnInit, AfterContentInit {
  @Input() option: string;
  public items: BestItem[] = [];
  public displayedColumns = ['itemid' , 'name' , 'price' , 'total' ];
  public dataSource: any ;
  @ViewChild('paging') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private queryPro: QueryService) {}

  ngOnInit(): void {
    console.log('ngOnInit - Best Items report - ' + this.option);
    this.getReportBy(this.option);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - Best Items report' + this.option);
  }
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public getReportBy(s: string) {
    this.queryPro.getBestUsers(s).subscribe(
      itemArr => {
        console.log(itemArr);
        itemArr.forEach( it => {
          this.items.push(it);
        });
        this.dataSource = new MatTableDataSource<BestItem>(this.items);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
  }
}
