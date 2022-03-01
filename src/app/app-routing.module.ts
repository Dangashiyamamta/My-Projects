import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { BlogComponent } from './blog/blog.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'registration-form', pathMatch: 'full'},
  {path: 'registration-form', component: RegistrationFormComponent},
  {path:'blog', component: BlogComponent},
  {path: 'animation', component: AnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
