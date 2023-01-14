import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakelistComponent } from './takelist.component';

describe('TakelistComponent', () => {
  let component: TakelistComponent;
  let fixture: ComponentFixture<TakelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
