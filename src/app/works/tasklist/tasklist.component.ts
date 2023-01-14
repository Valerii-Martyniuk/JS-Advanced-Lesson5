import { Component, Output, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;

  public oneMoreTask: string = '';
  public chengeData!: string;
  public numData!: number;
  public display!: boolean;

  public tasksList = [
    { task: 'HTML5', statys: 'In Progress', check: false },
    { task: 'CSS3', statys: 'In Progress', check: false },
    { task: 'JavaScript', statys: 'In Progress', check: false },
  ];

  pushTask(): void {
    if (this.oneMoreTask != '') {
      let moreTask = {
        task: this.oneMoreTask,
        statys: 'In Progress',
        check: false,
      };
      this.tasksList.push(moreTask);
      this.oneMoreTask = '';
    } else {
      alert('wtite task');
    }
  }
  getChenge(event: any): void {
    this.chengeData = event[0];
    this.numData = event[1];
    this.display = event[2];
  }
  reloadTask(): void {
    this.display = false;
    this.child.display = false;
    this.tasksList[this.numData].task = this.chengeData;
    this.chengeData = '';
  }
}
