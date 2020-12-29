import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobremesasPage } from './sobremesas.page';

describe('SobremesasPage', () => {
  let component: SobremesasPage;
  let fixture: ComponentFixture<SobremesasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobremesasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobremesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
