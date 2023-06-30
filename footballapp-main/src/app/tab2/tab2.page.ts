import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
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