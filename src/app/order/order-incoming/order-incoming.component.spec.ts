import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIncomingComponent } from './order-incoming.component';

describe('OrderIncomingComponent', () => {
  let component: OrderIncomingComponent;
  let fixture: ComponentFixture<OrderIncomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderIncomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
