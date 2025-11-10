import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async login(email : string, password : string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  
  async registro(email : string, password : string) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    await userCredential.user?.sendEmailVerification();
    return userCredential;
  }

  async logout() {
    return this.afAuth.signOut();
  }

  get user() {
    return this.afAuth.authState;
  }
}