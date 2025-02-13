import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingOrderComponent } from './loading-order.component';

describe('LoadingOrderComponent', () => {
  let component: LoadingOrderComponent;
  let fixture: ComponentFixture<LoadingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
