import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() tasks: any;
  @Output() childTask = new EventEmitter();

  public display!: boolean;

  change(i: number): void {
    this.tasks[i].check = !this.tasks[i].check;
  }
  chengeTaskBtn(i: number) {
    this.display = true;
    this.tasks[i].check = false;
    this.childTask.emit([this.tasks[i].task, i, this.display]);
  }
  deleteTask(i: number): void {
    this.tasks.splice(i, 1);
  }
}
