import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reader-post',
  templateUrl: './reader-post.component.html',
  styleUrls: ['./reader-post.component.css']
})
export class ReaderPostComponent implements OnInit {
  private postDoc: AngularFirestoreDocument<any>;
  post: any;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getPost(params.get('id'));
    });
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

}
