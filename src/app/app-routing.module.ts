import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorAuthGuard } from './guards/editor-auth.guard';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AuthComponent} from './components/auth/auth.component';


const appRoutes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: AuthComponent},
      { path: 'logout', component: AuthComponent}
    ]
  },
  {
    path: '',
    loadChildren: 'app/modules/reader/reader.module#ReaderModule'
  },
  {
    path: 'editor',
    canActivateChild: [EditorAuthGuard],
    loadChildren: 'app/modules/editor/editor.module#EditorModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [EditorAuthGuard]
})
export class AppRoutingModule {

}
