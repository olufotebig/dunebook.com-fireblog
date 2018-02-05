import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderPostsComponent } from './reader-posts.component';

describe('ReaderPostsComponent', () => {
  let component: ReaderPostsComponent;
  let fixture: ComponentFixture<ReaderPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
