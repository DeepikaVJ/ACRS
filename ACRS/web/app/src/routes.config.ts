import { Routes,RouterModule } from '@angular/router';

import {CarDetailComponent} from "./cardetail.component";
import {DepartmentComponent} from "./department.component";

let routes:Routes = [
    {path:'departments/:vin',component:DepartmentComponent},
    {path:'cardetail',component:CarDetailComponent},
    // // {path:'movie/:mid',component:MovieComponent},
      {path:'',redirectTo:'/cardetail',pathMatch:'full'},
];

export const configuredRoutes = RouterModule.forRoot(routes);