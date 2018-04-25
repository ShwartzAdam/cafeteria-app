import { Pipe, PipeTransform } from '@angular/core';

import {OrderList} from '../interface/orderlist';

@Pipe({
  name: 'orderByTime',
  pure: false
})
export class TimeOrderPipe implements PipeTransform {
  constructor() {}
  transform(orderlist: OrderList[], numberoforders: number): OrderList[] {
    return this.sort(orderlist).slice(0, numberoforders);
  }
  sort(orderlist): OrderList[] {
    const newVal = orderlist.sort((a: any, b: any) => {
      const date1 = new Date(a.ol_dttm);
      const date2 = new Date(b.ol_dttm);

      if (date1 < date2) {
        return 1;
      } else if (date1 > date2) {
        return -1;
      } else {
        return 0;
      }
    });
    return newVal;
  }

}
