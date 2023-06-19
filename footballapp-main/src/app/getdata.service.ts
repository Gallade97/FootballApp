import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

  doGet = () => {
    const options = {
      url: 'https://newsapi.org/v2/everything?q=footballtransfers&sortBy=publishedAt&apiKey=0f5942efc2b3457b9c2e0b2a036ab5c5',
    };
  
  return from(Http.get(options))
  };
}
