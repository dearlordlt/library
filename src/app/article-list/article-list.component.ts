import {Component, OnInit} from '@angular/core';
import {Article} from "../classes/article";

const ARTICLES: Article[] = [
    {id: 0, name: 'first', text: 'first article text'},
    {id: 1, name: 'second', text: 'second article text'}
];

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
    
    articles = ARTICLES;
    selectedArticle: Article;
    
    onSelect(article: Article): void {
        this.selectedArticle = article;
    }
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
}
