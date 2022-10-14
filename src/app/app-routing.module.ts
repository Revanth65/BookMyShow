import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [{path:"main",component:MainComponent},
{path:'',component:SideNavComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
