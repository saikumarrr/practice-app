import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppslistComponent } from './appslist.component';

describe('AppslistComponent', () => {
  let component: AppslistComponent;
  let fixture: ComponentFixture<AppslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
