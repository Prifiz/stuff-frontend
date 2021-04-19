import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMaintenanceComponent } from './upcoming-maintenance.component';

describe('UpcomingMaintenanceComponent', () => {
  let component: UpcomingMaintenanceComponent;
  let fixture: ComponentFixture<UpcomingMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
