import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CounterStore } from './counter.store';
import { HttpClientModule } from '@angular/common/http';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [ HttpClientModule ],
      declarations: [ CounterComponent ],
      providers: [
        provideMockStore(),
        CounterStore
      ],
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
