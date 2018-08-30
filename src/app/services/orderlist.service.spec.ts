import {OrderListService} from './orderlist.service';

describe('Order List Service', () => {
  let service: OrderListService;
  beforeEach(() => {
    service = new OrderListService();
  });

  it('Order List service should return a define object from API by type = Incoming', () => {
    service.getAllOrdersByStatus('Incoming').then( res => {
      expect(res).toBeDefined();
    });
  });
  it('Order List service should return a define object from API by type = Active', () => {
    service.getAllOrdersByStatus('Active').then( res => {
      expect(res).toBeDefined();
    });
  });
  it('Order List service should return a define object from API by type = Completed', () => {
    service.getAllOrdersByStatus('Completed').then( res => {
      expect(res).toBeDefined();
    });
  });
  it('Order List service should return today incoming orders to make', () => {
    service.getTodayFutureOrders().then( res => {
      expect(res).toBeDefined();
    });
  });
  it('Order List service should return today active orders to make', () => {
    service.getTodayActiveOrders().then( res => {
      expect(res).toBeDefined();
    });
  });


});

