import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InputGroupComponent, TasksComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TasksService]
})
export class AppModule { }
