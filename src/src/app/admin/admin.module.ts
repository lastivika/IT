import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BurgersPageComponent } from "./burgers-page/burgers-page.component";
import { CoffeePageComponent } from "./coffee-page/coffee-page.component";
import { SodaPageComponent } from "./soda-page/soda-page.component";


@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
   
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    { path: '', redirectTo: "./admin/login", pathMatch: 'full' },
                    { path: 'login', component: LoginPageComponent },
                    { path: '', redirectTo: "./admin/burgers", pathMatch: 'full' },
                    { path: 'burgers', component: BurgersPageComponent },
                    { path: '', redirectTo: "./admin/coffee", pathMatch: 'full' },
                    { path: 'coffee', component: CoffeePageComponent },
                    { path: '', redirectTo: "./admin/soda", pathMatch: 'full' },
                    { path: 'soda', component: SodaPageComponent }
                ]
            }
        ])
    ],
})

export class AdminModule { }