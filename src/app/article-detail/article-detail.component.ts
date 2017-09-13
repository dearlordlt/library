import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../classes/article";

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent implements OnInit {
    @Input() article: Article;
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
}
