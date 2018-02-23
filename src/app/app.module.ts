import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AuthComponent} from './components/auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'fire-blog' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'fire-blog'),
    AngularFireAuthModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
