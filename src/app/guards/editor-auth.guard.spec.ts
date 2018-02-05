import { TestBed, async, inject } from '@angular/core/testing';

import { EditorAuthGuard } from './editor-auth.guard';

describe('EditorAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorAuthGuard]
    });
  });

  it('should ...', inject([EditorAuthGuard], (guard: EditorAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
