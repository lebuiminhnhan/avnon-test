import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnswerModel, IFormModel } from 'src/app/model/model';

@Component({
  selector: 'app-form-answer',
  templateUrl: './form-answer.component.html',
  styleUrls: ['./form-answer.component.css']
})
export class FormAnswerComponent implements OnInit {

  data!: IFormModel
  constructor(private router: Router) { }

  ngOnInit() {
    if (history.state.data) {
      this.data = history.state.data as IFormModel;
    } else {
      this.router.navigate(['']);
    }
  }

  answer(answer: IAnswerModel[]) {
    return answer.filter(x => x.value);
  }

}
