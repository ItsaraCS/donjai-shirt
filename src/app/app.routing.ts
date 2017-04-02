import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const appRoute: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(appRoute);