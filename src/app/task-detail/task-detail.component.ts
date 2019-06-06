import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { TaskItem } from '../task-item';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  task: TaskItem;

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.tasksService.getTask(id).subscribe(task=>this.task=task);
  }
}