import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profilim',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profilim.component.html',
  styleUrl: './profilim.component.scss'
})
export class ProfilimComponent {
  userProfile: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      data => {
        email:data.email,
        data.firstName;
        this.userProfile = data;
        console.log(this.userProfile.email);
        console.log(this.userProfile.firstName);

      },
      error => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
}
