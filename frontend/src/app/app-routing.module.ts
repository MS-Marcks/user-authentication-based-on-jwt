import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { DataprivateComponent } from './private/dataprivate/dataprivate.component';
import { DatapublicComponent } from './public/datapublic/datapublic.component';
import { AuthGuard } from './guard/auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'private', component: DataprivateComponent, canActivate: [AuthGuard] },
  { path: 'public', component: DatapublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],


  exports: [RouterModule]
})
export class AppRoutingModule { }
