import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAnswerComponent } from './component/form-answer/form-answer.component';
import { FormBuilderComponent } from './component/form-builder/form-builder.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form/builder',
    pathMatch: 'full'
  },
  { path: 'form/builder', component: FormBuilderComponent},
  { path: 'form/answers', component: FormAnswerComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
