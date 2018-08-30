/**
 * Menu published component
 *
 */

import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {Item} from '../../interfaces/item';

@Component({
  selector: 'app-menu-published',
  templateUrl: './menu-published.component.html',
  styleUrls: ['./menu-published.component.css']
})
export class MenuPublishedComponent implements OnInit,
  AfterContentInit {
  public items: Item[] = [];
  public displayedColumns = ['itemid' , 'supid' , 'name' , 'type' , 'quantity' , 'price'];
  public dataSource: any ;
  @ViewChild('paging') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public itemService: ItemService) {}
  ngOnInit(): void {
    this.getPusblishedMenu();
  }
  ngAfterContentInit(): void {
  }
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public getPusblishedMenu() {
    this.itemService.getAllItemsSub().subscribe(
      itemsArr => {
        itemsArr.forEach( it => {
          this.items.push(it);
        });
        this.dataSource = new MatTableDataSource<Item>(this.items);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        });
      }
    );

  }

}
