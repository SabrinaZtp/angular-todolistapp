import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskItem } from './task-item';

@Injectable({
  providedIn: 'root',
})

export class TasksService {

  constructor() { }

  tasks: TaskItem[] = [
    {id: 0, name: "prepare lunch", isFinished: true},
    {id: 1, name: "eat fruit", isFinished: false}
  ];

  getTasks(): Observable<TaskItem[]> {
    console.log("gettting tasks");
    return of(this.tasks);
  }

  addTask(taskName: string): TaskItem[] {
    let tasks = this.tasks;
    const newId = tasks.length;
    this.tasks.push({id: newId, name:taskName, isFinished: false});
    return this.tasks;
  }

  toggleIsFinished(id: number): TaskItem[] {
    const isFinished_prev = this.tasks[id].isFinished;
    this.tasks[id].isFinished = !isFinished_prev;
    return this.tasks;
  }
}