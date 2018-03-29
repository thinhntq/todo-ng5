import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private itemTask = new BehaviorSubject<any>(['Node JS','Angular']);
  public textTodo = this.itemTask.asObservable();
  constructor() { }
  changeText(textTodo) {
    this.itemTask.next(textTodo);
  }
}
