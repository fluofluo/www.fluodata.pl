import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

//import { IndexComponent } from "./pages/index/index.component";
//import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
//import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { PolicypageComponent } from "./pages/examples/policypage/policypage.component";
import { MainpageComponent } from "./pages/examples/mainpage/mainpage.component";

const routes: Routes = [
  { path: "", redirectTo: "mainpage", pathMatch: "full" },
  //{ path: "home", component: IndexComponent },
  //{ path: "profilepage", component: ProfilepageComponent },
  //{ path: "register", component: RegisterpageComponent },
  { path: "policypage", component: PolicypageComponent },
  { path: "mainpage", component: MainpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],

  
  exports: []
})
export class AppRoutingModule {}
