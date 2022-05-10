import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path: 'nav', component: NavComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
