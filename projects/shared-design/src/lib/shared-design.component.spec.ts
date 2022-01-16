import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDesignComponent } from './shared-design.component';

describe('SharedDesignComponent', () => {
  let component: SharedDesignComponent;
  let fixture: ComponentFixture<SharedDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
