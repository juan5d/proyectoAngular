
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { ViewListComponent } from './pages/view-list/view-list.component';

const routes: Routes = [
{path:'',pathMatch:'full',redirectTo:'view-list'},
{path:'view-list', component:ViewListComponent},
{path:'create-item', component:CreateItemComponent},
{path:'edit-item/:id', component:EditItemComponent},
{path:'view-todos', component:ViewTodosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
