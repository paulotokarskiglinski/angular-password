import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPipe } from './pipes/password.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public passwordErros: any = {};
  public passwordForm: FormGroup;
  public isVisible: boolean = false;

  constructor(private fb: FormBuilder, private passwordPipe: PasswordPipe) {
    this.passwordForm = this.fb.group({
      password1: [null, Validators.required],
      password2: [null, Validators.required]
    });
  }

  public changeVisible(): void {
    this.isVisible = !this.isVisible;
  }

  public checkPassword(): void {
    this.passwordErros = this.passwordPipe.transform(this.passwordForm.get('password1').value);
  }

  public isPasswordValid(): boolean {
    if (this.passwordForm.valid && this.passwordForm.get('password1').value === this.passwordForm.get('password2').value) {
      return true;
    }
    return false;
  }
}
