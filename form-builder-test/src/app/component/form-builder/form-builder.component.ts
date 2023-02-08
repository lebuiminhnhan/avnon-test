import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IFormModel } from 'src/app/model/model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  questionsForm!: FormGroup;
  newQuestionsForm!: FormGroup;
  modalAddQuestion!: NgbModalRef;

  constructor(public _formBuilder: FormBuilder, private _modalService: NgbModal, private _router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.questionsForm = this._formBuilder.group({
      description: ['', [Validators.required]],
      questions: this._formBuilder.array([this._formBuilder.group({
        questionName: 'Please select the languages you know',
        isRequired: true,
        isTypeCheckbox: true,
        answerName: this._formBuilder.array([
          this._formBuilder.group({
            answer: 'TypeScript',
            value: false
          }),
          this._formBuilder.group({
            answer: 'Python',
            value: false
          }),
          this._formBuilder.group({
            answer: 'C#',
            value: false
          }),
          this._formBuilder.group({
            answer: 'Other',
            value: false
          })
        ])
      })])
    })
  }

  get getControl(){
    return this.questionsForm.controls;
  }


  getAnswers(index: number) {
    return (this.questionsForm.get("questions") as FormArray).controls[index].get("answerName") as FormArray;
  }

  get questions() {
    return (this.questionsForm.get("questions") as FormArray);
  }
  get newQuestions() {
    return (this.newQuestionsForm as FormGroup);
  }
  get answers() {
    return (this.newQuestionsForm.get("answerName") as FormArray);
  }

  addAnotherAnswer() {
    this.answers.push(this._formBuilder.group({
      answer: '',
      value: false
    }));
  }

  newQuestion(): FormGroup {
    return this._formBuilder.group({
      questionName: '',
      isRequired: false,
      isTypeCheckbox: false,
      answerName: this._formBuilder.array([
        this._formBuilder.group({
          answer: '',
          value: false,
          answerText: ''
        }),
      ])
    })
  }

  onSubmitAddQuestion() {
    this.questions.push(this.newQuestionsForm);
    this.modalAddQuestion.dismiss();
  }

  onSubmitReviewAnswer() {
    console.log(this.questionsForm);
    this._router.navigate(['form/answers'], {state: {data: this.questionsForm.value as IFormModel}})
  }

  openModalAddQuestion(content: any) {
    this.newQuestionsForm = this.newQuestion();
    this.modalAddQuestion = this._modalService.open(content, { size: 'lg' });
  }
}
