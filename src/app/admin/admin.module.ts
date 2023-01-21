



import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from '../shared/admin-layout/admin-layout.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: ' ', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: "/admin/login", pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent}
                ]
            }
        ])
    ],

})
export class AdminModule { }

export class AppModule { }