import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { NewPostPageComponent } from './pages/new-post-page/new-post-page.component';
import { DismissAlertComponent } from './components/dismiss-alert/dismiss-alert.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducers/post.reducer';


@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    PostComponent,
    CommentComponent,
    PostPageComponent,
    NewPostPageComponent,
    DismissAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      posts: postReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
