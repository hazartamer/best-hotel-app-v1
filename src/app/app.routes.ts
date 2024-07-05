import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { MainComponent } from './main/main.component';
import { ProfilimComponent } from './profilim/profilim.component';

export const routes: Routes = [
    {
        path: "login",
        loadComponent:
        () => import("./login/login.component")
        .then(c => c.LoginComponent)
    }, 
    {
        path: "main",
        component:MainComponent
    },
    {
        path: "rooms",
        component:RoomsComponent
    },
    {
        path: "profilim",
        component:ProfilimComponent
    }
      
];
