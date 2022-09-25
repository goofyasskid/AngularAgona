import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DialogService } from 'src/app/services/dialog.service';
import { LoginModalComponent } from '../../modals/modal-content/login-modal/login-modal.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPanelComponent implements OnInit {
  user: any;
  constructor(private dialog: DialogService,
              public authService: AuthService,
              private route: Router) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe(res => {
      this.user = res;
    });
  }

  openSimpleDialog() {
    this.dialog.openDialog(LoginModalComponent);
  }

  openActionDialog() {
    const dialog = this.dialog.openDialog(LoginModalComponent, {
      data: {
        name: 'Иван Иванович'
      },
    });
  }

  openProfile() {
    this.route.navigate(['/user'])
  }
  closeProfile(){
    this.route.navigate(['/'])
  }
}
