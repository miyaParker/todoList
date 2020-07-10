import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
@Output () submit: EventEmitter<string> = new EventEmitter()
  getInput(input: any) {
    if(input.value){
      this.submit.emit(input.value)
    }    
    input.value = ''
  }
  ngOnInit(): void {
  }
}
