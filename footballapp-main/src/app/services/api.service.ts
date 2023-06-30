import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get(`https://newsapi.org/v2/everything?q=footballtransfers&sortBy=publishedAt&apiKey=0f5942efc2b3457b9c2e0b2a036ab5c5`);
  }

  getArticle(id){
    return this.http.get(`https://newsapi.org/v2/everything?q=footballtransfers&sortBy=publishedAt&apiKey=0f5942efc2b3457b9c2e0b2a036ab5c5${id}`);
  }
}
