import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderPostComponent } from './reader-post.component';

describe('ReaderPostComponent', () => {
  let component: ReaderPostComponent;
  let fixture: ComponentFixture<ReaderPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
