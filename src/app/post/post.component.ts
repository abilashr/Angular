import { Article } from '../interface/article';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  subTitle: string;
  data: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  this.subTitle = 'Sample HTTP POST request';

  // Simple POST request with a JSON body and response type <any>
  this.http.post<any>('https://jsonplaceholder.typicode.com/posts', {Title: 'This is Angular Post1'})
    .subscribe(res => {
      this.data = res;
      console.log('Simple POST', this.data);
    }
  );

  // POST request with strongly typed response
  this.http.post<Article>('https://jsonplaceholder.typicode.com/posts', {Title: 'This is Angular Post2'})
    .subscribe(res => {
      this.data = res;
      console.log('strongly typed response', this.data);
    }
  );

  // POST request with error handling
  this.http.post('https://jsonplaceholder.typicode.com/posts', {Title: 'This is Angular Post3'})
    .subscribe({
      next: res => {
        this.data = res;
        console.log('with error handling', this.data);
      },
      error: error => { console.log(error); }
    }
  );

  }

}
