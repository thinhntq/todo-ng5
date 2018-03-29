import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public itemCount: number;
  public textTodo: string;
  
  public itemTask = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this.itemCount = this.itemTask.length;
    this._data.textTodo.subscribe(res => this.itemTask = res);
    this._data.changeText(this.itemTask);
  }

  addToTask() {
    this.itemTask.push(this.textTodo);
    this.textTodo = '';
    this.itemCount = this.itemTask.length;
    this._data.changeText(this.itemTask);
  }
  delteTask(i) {
    this.itemTask.splice(i, 1);
    this.itemCount = this.itemTask.length;
    this._data.changeText(this.itemTask);
  }

}
