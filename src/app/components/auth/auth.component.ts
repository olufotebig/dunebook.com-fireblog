import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import {Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((function(router, route) {
      return function() {
         route.queryParams.subscribe(
          data => router.navigate( [data['next']])  );
      };
    })(this.router, this.route));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
