import {Routes, RouterModule} from '@angular/router';

import {CarDetailComponent} from "./cardetail.component";
import {DepartmentComponent} from "./department.component";
import {Dept4PeriodicServicesComponent} from "./dept4.periodicServices.component";
import {Dept3CleaningAndCareComponent} from "./dept3.cleaningAndCare.component";
import {Dept2RepairsAndFixesComponent} from "./dept2.repairsAndFixes.component";
import {Dept1DentingpaintingComponent} from "./dept1.dentingpainting.component";
import {StatusComponent} from "./status.component";

let routes: Routes = [
    {path: 'departments/:vin', component: DepartmentComponent},
    {path: 'dept1', component: Dept1DentingpaintingComponent},
    {path: 'dept2', component: Dept2RepairsAndFixesComponent},
    {path: 'dept3', component: Dept3CleaningAndCareComponent},
    {path: 'dept4', component: Dept4PeriodicServicesComponent},
    {path: 'status/:appointmentId', component: StatusComponent},
    {path: 'cardetail', component: CarDetailComponent},
    // // {path:'movie/:mid',component:MovieComponent},
    {path: '', redirectTo: '/cardetail', pathMatch: 'full'},
];

export const configuredRoutes = RouterModule.forRoot(routes);