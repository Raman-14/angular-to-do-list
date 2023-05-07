import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { ViewTodoComponent } from './pages/view-todo/view-todo.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    title:'Home - Todo Manager',
  },
  {
    path:'add-todo',
    component:AddTodoComponent,
    title:'Add Todo - Todo Manager',
    // data: {"hey":"Hey Hey"}
  },
  {
    path:'view-todo',
    component:ViewTodoComponent,
    title:'View Todo - Todo Manager',
  },
{
  path:'update-todo',
  component:UpdateTodoComponent,
  title:'Update Todo - Todo Manager',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
