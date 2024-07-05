import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from '../model/login.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string="";
  password: string="";
constructor(
  private _auth: AuthService,
  private _router:Router,
  private _toastr:ToastrService,
  private http: HttpClient
){}
login(form:NgForm){
  if(form.valid){
    let model = new LoginModel();
    model.email = form.controls["email"].value;
    model.password = form.controls["password"].value;

    this._auth.login(model, res=>{
      this._toastr.success("Giriş başarılı!");
      this._auth.setToken(res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      this._router.navigateByUrl("/main");
    })
  }
}
login2(form:NgForm): void {
  this.http.post<{ token: string }>('http://localhost:8080/auths/login', {
  }).subscribe(response => {
    this._auth.setToken(response.token);
    this._router.navigate(['/rooms']); // Login sonrası yönlendirme
  }, error => {
    console.error('Login error', error);
  });
}
}


