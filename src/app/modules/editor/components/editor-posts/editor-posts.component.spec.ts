import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPostsComponent } from './editor-posts.component';

describe('EditorPostsComponent', () => {
  let component: EditorPostsComponent;
  let fixture: ComponentFixture<EditorPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
