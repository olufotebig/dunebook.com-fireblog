import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import {Post} from '../../../editor/components/editor-posts/editor-posts.component';

@Component({
  selector: 'app-reader-posts',
  templateUrl: './reader-posts.component.html',
  styleUrls: ['./reader-posts.component.css']
})
export class ReaderPostsComponent implements OnInit {
  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = afs.collection<Post>('posts');
    this.posts = this.postsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  ngOnInit() {
  }

}
