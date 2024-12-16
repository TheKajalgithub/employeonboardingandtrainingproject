import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './home/nav/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { TrainerItComponent } from './trainer-it/trainer-it.component';
import { HrComponent } from './hr/hr.component';
import { TrainerHrComponent } from './trainer-hr/trainer-hr.component';
import { ItPageComponent } from './it-page/it-page.component';
import { FinanceComponent } from './finance/finance.component';
import { TrainerFinanceComponent } from './trainer-finance/trainer-finance.component';
import { SalesComponent } from './sales/sales.component';
import { TrainerSalesComponent } from './trainer-sales/trainer-sales.component';
import { ProgressTrackingComponent } from './progress-tracking/progress-tracking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TravelComponent } from './travel/travel.component';
import { SecurityStaffApplyComponent } from './security/security.component';
import { GardenerComponent } from './gardener/gardener.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'register', component: SignupComponent },// Path corrected if necessary
    {path:'admin',component:AdminComponent},
    {path:'view',component:ViewComponent},


    { path: '', redirectTo: '/trainer-it', pathMatch: 'full' },
    { path: 'trainer-it', component: TrainerItComponent },
    { path: 'progress-tracking', component: ProgressTrackingComponent},


  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  { path: 'sales', component: SalesComponent },
  { path: 'trainer-sales', component: TrainerSalesComponent},


  { path: '', redirectTo: '/hr', pathMatch: 'full' },
  { path: 'hr', component: HrComponent },
  { path: 'trainer-hr', component: TrainerHrComponent },

  { path: '', redirectTo: '/it-page', pathMatch: 'full' },
  { path: 'it-page', component: ItPageComponent },
  { path: 'trainer-it', component: TrainerItComponent },
  
   { path: 'finance', component: FinanceComponent },
  { path: 'trainer', component: TrainerFinanceComponent },
  { path: '', redirectTo: '/finance', pathMatch: 'full' },

  {path:'aboutUs',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'travel',component:TravelComponent},
  {path:'security',component:SecurityStaffApplyComponent},
  {path:'gardener',component:GardenerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
