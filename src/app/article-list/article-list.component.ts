import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
    
    public articles: Article[] = [
        {id: 0, name: 'first', text: 'first article text'},
        {id: 1, name: 'second', text: 'second article text'}
    ];
    public selectedArticle: Article;
    
    onSelect(article: Article): void {
        this.selectedArticle = article;
    }
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
}
