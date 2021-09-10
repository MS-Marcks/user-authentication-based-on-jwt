import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapublicComponent } from './datapublic.component';

describe('DatapublicComponent', () => {
  let component: DatapublicComponent;
  let fixture: ComponentFixture<DatapublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
