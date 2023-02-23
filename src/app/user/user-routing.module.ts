import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '', component: UserComponent,

  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'list'
    },
    {
      path: 'list',
      component: UserListContainerComponent
    },

    {
      path: 'add',
      component: UserListContainerComponent
    },
    {
      path:'edit/:id',
      component:UserListContainerComponent
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
