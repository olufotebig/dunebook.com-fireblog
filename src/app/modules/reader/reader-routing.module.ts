import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReaderPostComponent } from './components/reader-post/reader-post.component';
import { ReaderPostsComponent } from './components/reader-posts/reader-posts.component';

const editorRoutes: Routes = [
  {
    path: 'post/:id',
    component: ReaderPostComponent
  },
  { path: '',
    component: ReaderPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(editorRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class ReaderRoutingModule {

}
