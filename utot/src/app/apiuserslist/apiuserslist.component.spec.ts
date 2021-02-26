import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiuserslistComponent } from './apiuserslist.component';

describe('ApiuserslistComponent', () => {
  let component: ApiuserslistComponent;
  let fixture: ComponentFixture<ApiuserslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiuserslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiuserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
