import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage{

  email = '';
  password = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) { }

  async onLogin() {
    this.loading = true;

  try {
    await this.auth.login(this.email, this.password);

    // 👇 Quitar el foco activo (botón o input) antes de navegar
    const active = document.activeElement as HTMLElement | null;
      if (active) active.blur();

      // 👇 Ahora navega con seguridad
      this.router.navigate(['/tabs']);
    } catch (e: any) {
      alert('Login failed: ' + e.message);
    } finally {
      this.loading = false;
    }
    }

}
