import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataprivateComponent } from './dataprivate.component';

describe('DataprivateComponent', () => {
  let component: DataprivateComponent;
  let fixture: ComponentFixture<DataprivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataprivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataprivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
