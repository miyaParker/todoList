import { OnInit, Input } from '@angular/core';

export interface ITask {
  text: string,
  status: string,
  id: number
}
export class TaskComponent implements OnInit {
  text: string = '';
  status: string = 'pending';
  id: number;
  constructor(values: object = {}) {
    Object.assign(this, values)
  }
  @Input() task: ITask
  ngOnInit(): void {
  }

}
