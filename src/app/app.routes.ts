import { Routes } from '@angular/router';
import { authGuard } from './core/gards/auth.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { loginGuard } from './core/gards/login.guard';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { TimelineComponent } from './components/timeline/timeline.component';




export const routes: Routes = [


    {
        path: '', component: AuthLayoutComponent, canActivate: [loginGuard], children: [
            { path: '', redirectTo: 'signin', pathMatch: 'full' },
            {
                path: 'signin',
                loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),
                title: 'Login'
            },
            {
                path: 'signup',
                loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent),
                title: 'Register'
            },

        ]
    },
    {
        path: '', component: BlankLayoutComponent, children: [
            { path: '', redirectTo: 'timeline', pathMatch: 'full' },
            { path: 'timeline', component: TimelineComponent, title: 'TimeLine',canActivate: [authGuard] },
            { path: 'uploadPhoto', loadComponent: () => import('./components/upload-photo/upload-photo.component').then(m => m.UploadPhotoComponent), title: 'uploadPhoto',canActivate: [authGuard] },
            { path: 'changePassword', loadComponent: () => import('./components/change-password/change-password.component').then(m => m.ChangePasswordComponent), title: 'ChangePassword' },

        ]
        
    },
    { path: '**', loadComponent: () => import('./components/not-founded/not-founded.component').then(m => m.NotFoundedComponent), title: 'Not Found' }
];
