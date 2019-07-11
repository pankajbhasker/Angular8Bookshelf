import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShelfComponent } from './my-shelf.component';

describe('MyShelfComponent', () => {
  let component: MyShelfComponent;
  let fixture: ComponentFixture<MyShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
