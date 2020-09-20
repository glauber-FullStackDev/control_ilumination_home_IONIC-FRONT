import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomControlPage } from './room-control.page';

describe('RoomControlPage', () => {
  let component: RoomControlPage;
  let fixture: ComponentFixture<RoomControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomControlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
