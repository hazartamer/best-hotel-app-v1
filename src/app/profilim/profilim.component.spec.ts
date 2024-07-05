import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilimComponent } from './profilim.component';

describe('ProfilimComponent', () => {
  let component: ProfilimComponent;
  let fixture: ComponentFixture<ProfilimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
