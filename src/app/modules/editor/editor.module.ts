import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditorRoutingModule } from './editor-routing.module';


import { EditorPostsComponent } from './components/editor-posts/editor-posts.component';
import { EditorPostComponent } from './components/editor-post/editor-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditorRoutingModule,
  ],
  declarations: [EditorPostsComponent, EditorPostComponent],
  exports: [],
  providers: []
})
export class EditorModule {

}
