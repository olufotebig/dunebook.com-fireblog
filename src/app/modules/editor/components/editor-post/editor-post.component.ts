import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Post} from '../editor-posts/editor-posts.component';
@Component({
  selector: 'app-editor-post',
  templateUrl: './editor-post.component.html',
  styleUrls: ['./editor-post.component.css']
})
export class EditorPostComponent implements OnInit {
  private postDoc: AngularFirestoreDocument<Post>;
  formModel: Post;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  update() {
    if (this.postDoc) {
    // TODO throttle update
      this.postDoc.update(this.formModel);
    }
  }

  ngOnInit() {
    this.formModel = {title: '', content: ''};
     // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.postDoc.valueChanges().subscribe(v => {
      this.formModel = v;
    });
  }

}
