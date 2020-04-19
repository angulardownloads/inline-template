import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineTemplateComponent } from './inline-template/inline-template.component';


const routes: Routes = [
  {
    path:'inline-template',
    component:InlineTemplateComponent

  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
