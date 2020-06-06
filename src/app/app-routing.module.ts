import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { LearnComponent } from './learn/learn.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'create', component: CreateFormComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

