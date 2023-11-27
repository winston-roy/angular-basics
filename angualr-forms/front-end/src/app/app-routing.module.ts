import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from 'src/app/basics/basics.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'basics', component:BasicsComponent
  },
  {
    path:'component-interaction', component:ChildComponent
  },
  {
    path:'http-observable', component:HttpObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  BasicsComponent,
  HomeComponent
]
