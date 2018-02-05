import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReaderRoutingModule } from './reader-routing.module';


import { ReaderPostsComponent } from './components/reader-posts/reader-posts.component';
import { ReaderPostComponent } from './components/reader-post/reader-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReaderRoutingModule,
  ],
  declarations: [ReaderPostsComponent, ReaderPostComponent],
  exports: [],
  providers: []
})
export class ReaderModule {

}
