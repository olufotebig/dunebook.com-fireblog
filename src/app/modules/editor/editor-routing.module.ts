import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorPostComponent } from './components/editor-post/editor-post.component';
import { EditorPostsComponent } from './components/editor-posts/editor-posts.component';

const editorRoutes: Routes = [
  {
    path: 'posts',
    component: EditorPostsComponent
  },
  {
    path: 'post/:id',
    component: EditorPostComponent
  },
  { path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(editorRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class EditorRoutingModule {

}
