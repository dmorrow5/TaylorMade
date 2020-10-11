import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { EmployeesComponent } from './employees/employees.component';
import { MaterialsComponent } from './materials/materials.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ContractFeesComponent } from './contract-fees/contract-fees.component';
import { CustomersComponent } from './customers/customers.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectTypesComponent } from './project-types/project-types.component';
import { EmployeesModule } from './employees/employees.module';
import { MaterialsModule } from './materials/materials.module';
import { ContractsModule } from './contracts/contracts.module';
import { CustomersModule } from './customers/customers.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectTypesModule } from './project-types/project-types.module';
import { ContractFeesModule } from './contract-fees/contract-fees.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AnalyticsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ContractsModule,
    ProjectsModule,
    CustomersModule,
    EmployeesModule,
    MaterialsModule,
    EquipmentsModule,
    ContractFeesModule,
    ProjectTypesModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ContractsComponent, pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'materials', component: MaterialsComponent },
      { path: 'equipment', component: EquipmentsComponent },
      { path: 'contract-fees', component: ContractFeesComponent },
      { path: 'project-types', component: ProjectTypesComponent },
      { path: 'analytics', component: AnalyticsComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
