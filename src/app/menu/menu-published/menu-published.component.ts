import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../interface/item';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-menu-published',
  templateUrl: './menu-published.component.html',
  styleUrls: ['./menu-published.component.css'],
  providers : [ItemService]
})
export class MenuPublishedComponent implements OnInit,
                                               AfterContentInit {
  private itemsMenu: Item[] = [];
  dtOptions: DataTables.Settings = {};
  constructor(public itemService: ItemService) {}
  ngOnInit(): void {
    console.log("ngOnInit - Menu published");
    this.dtOptions = {
      searching: false,
      ordering:  false,
      info: false,
      pageLength: 7,
      lengthChange: false
    };
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - Menu published");
    this.getPusblishedMenu();
  }

  public getPusblishedMenu(): any {
    this.itemService.getAllItemsSub().subscribe(
      items => {
        this.itemsMenu = items;
        console.log(this.itemsMenu);
      }
    );

  }

}
