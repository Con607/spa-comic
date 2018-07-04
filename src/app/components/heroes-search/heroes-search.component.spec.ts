import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSearchComponent } from './heroes-search.component';

describe('HeroesSearchComponent', () => {
  let component: HeroesSearchComponent;
  let fixture: ComponentFixture<HeroesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
