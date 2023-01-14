import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserlistComponent } from './works/userlist/userlist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';

import { TakelistComponent } from './takelist/takelist.component';

const routes: Routes = [
  { path: 'takelist', component: TakelistComponent },
  {
    path: 'works',
    component: WorksComponent,
    children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'tasklist', component: TasklistComponent },
      { path: '', pathMatch: 'full', redirectTo: 'cenzor' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'takelist' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
