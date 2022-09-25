import { DialogRef, DIALOG_DATA } from '@angular/cdk-experimental/dialog';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DialogService } from 'src/app/services/dialog.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginModalComponent implements OnInit {
  Form: FormGroup;
  constructor(private dialogRef: DialogRef<LoginModalComponent>,
    private dialog: DialogService,
    private fb: FormBuilder,
    private route: Router,
    private toast: ToastService,
    private authService: AuthService,
    @Optional() @Inject(DIALOG_DATA) public data: string,
  ) {
    this.Form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: 'USER'
    });
  }
  ngOnInit() {
  }
  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
  login(): void {
    if (!this.Form.valid) {
      this.toast.error('Заполните все поля!');
      return;
    }

    this.authService.authorize(this.Form.value).subscribe(res => {
      this.toast.success('Добро пожаловать');
      this.authService.token = res.token;
      this.dialogRef.close();
      this.route.navigate(['/user/promo']);
      console.log(this.authService.isAuthorized)
    }, err => {
      console.log(err);
    })
  }
  control(name: string) {
    return this.Form.get(name);
  }
}
