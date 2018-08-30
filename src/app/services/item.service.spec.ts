import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;
  beforeEach(() => {
    service = new ItemService();
  });

  it('Item service should return a define object from API', () => {
    service.getAllItems().then( res => {
      expect(res).toBeDefined();
    });
  });


});

