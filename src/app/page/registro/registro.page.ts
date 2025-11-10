import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage {

  email = '';
  password = '';
  confirmPassword = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) { }

  async onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    this.loading = true;
    try {
      await this.auth.registro(this.email, this.password);
      alert('Registro exitoso. Se ha enviado un correo de verificacion a '+ this.email);
      this.router.navigate(['/login']);
    } catch (e: any) {
      alert('Error al registrar: ' + e.message);
    } finally {
      this.loading = false;
    }
  }
}
