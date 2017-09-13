import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ArticleListComponent} from './article-list/article-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'article/:id', component: ArticleDetailComponent},
  {
    path: 'articles',
    component: ArticleListComponent,
    data: {title: 'Article List'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
