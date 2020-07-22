import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun1Component } from './fun1.component';

describe('Fun1Component', () => {
  let component: Fun1Component;
  let fixture: ComponentFixture<Fun1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
