import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {QueryService} from '../../../services/query.service';

import * as Chart from 'chart.js';

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
export class BestItemsComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() option: string;
  public items: BestItem[] = [];
  public chartid: string;
  canvas: any;
  ctx: any;
  public title: string;
  public itemSale: number[] = [];
  public itemLabels: string[] = [];
  public myChart: any;
  // public displayedColumns = ['itemid' , 'name' , 'price' , 'total' ];
  // public dataSource: any ;
  // @ViewChild('paging') paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  constructor(private queryPro: QueryService) {}

  ngOnInit(): void {
    console.log('ngOnInit - Best Items report - ' + this.option);
    this.title = this.option;
    this.chartid = this.option;
    this.getReportBy(this.option);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - Best Items report' + this.option);
  }
  ngAfterViewInit(): void {}
  public getReportBy(s: string) {
    this.queryPro.getBestItems(s).subscribe(
      itemArr => {
        console.log(itemArr);
        let len = itemArr['length'];
        if (len === 0) {
          // hide the chart
          document.getElementById(this.chartid).style.display = 'none';
        } else {
          itemArr.forEach( it => {
            this.items.push(it);
            this.itemSale.push(it.total);
            this.itemLabels.push(it.name);
          });
          console.log(this.items);
          console.log(this.itemSale);
          console.log(this.itemLabels);
          this.canvas = document.getElementById(this.chartid);
          this.ctx = this.canvas.getContext('2d');
          this.myChart = new Chart(this.ctx, {
            type: 'horizontalBar',
            data: {
              labels: this.itemLabels,
              datasets: [
                {
                  label: this.title,
                  backgroundColor: '#8e5ea2',
                  data: this.itemSale
                }
              ]
            },
            options: {
              scales: {
                xAxes: [{
                  ticks: {
                    fontSize: 10
                  }
                }]
              },
              title: {
                display: true,
                text: this.title
              }
            }
          });
        }
      });
  }


}
