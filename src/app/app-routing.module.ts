import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { NewPostPageComponent } from './pages/new-post-page/new-post-page.component';


const routes: Routes = [
  { path: 'posts', component: PostsPageComponent },
  { path: 'posts/:id', component: PostPageComponent },
  { path: 'new-post', component: NewPostPageComponent },
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  { path: '**', component: PostsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
