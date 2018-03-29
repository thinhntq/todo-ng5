import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public itemTask: any;
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { }

  ngOnInit() {
    this._data.textTodo.subscribe(res => this.itemTask = res)
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
