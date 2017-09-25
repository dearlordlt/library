import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {FormsModule} from "@angular/forms";
import {CounterComponent} from './counter/counter.component';
import {counterReducer} from "./reducers/counter";
import {StoreModule} from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArticleDetailComponent,
        PageNotFoundComponent,
        ArticleListComponent,
        CounterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.provideStore({counter: counterReducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
