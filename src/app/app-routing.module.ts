import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReciboComponent } from './pages/recibo/recibo.component';

const routes: Routes = [
  {path:"recibo", component:ReciboComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
