import { Component } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  searchTerm: string;

  data: any;

  

  constructor(
    public route: Router,
    public getdata : GetdataService
  ) {}

    ngOnInit() {
      this.getdata.doGet().subscribe(res => {
        this.data = res.data.articles;
        console.log(this.data);
      })
    }
}