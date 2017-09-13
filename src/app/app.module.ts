import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ArticleListComponent} from './article-list/article-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArticleDetailComponent,
        PageNotFoundComponent,
        ArticleListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
