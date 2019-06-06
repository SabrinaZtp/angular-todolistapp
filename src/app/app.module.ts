import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, InputGroupComponent, TasksComponent, TaskDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TasksService]
})
export class AppModule { }
