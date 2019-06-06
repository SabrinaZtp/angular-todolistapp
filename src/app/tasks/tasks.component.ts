import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../task-item.js';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  tasks: TaskItem[];

  getTasks(): void {
    this.tasksService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  getCheckboxCLass(isFinished: boolean): string {
    if (isFinished) {
      return 'fa fa-check-square-o';
    } else {
      return 'fa fa-square-o';
    }
  }
}