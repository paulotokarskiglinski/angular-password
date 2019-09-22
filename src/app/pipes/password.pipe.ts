import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  private lowCase = /[a-z]/g;
  private capCase = /[A-Z]/g;
  private numbers = /[0-9]/g;
  private symbols = /[-@!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
  private strength = {
    length: false,
    lowCase: false,
    capCase: false,
    numbers: false,
    symbols: false
  };

  transform(password: string): any {
    password.length >= 6 ? this.strength.length = true : this.strength.length = false;
    password.match(this.lowCase) ? this.strength.lowCase = true : this.strength.lowCase = false;
    password.match(this.capCase) ? this.strength.capCase = true : this.strength.capCase = false;
    password.match(this.numbers) ? this.strength.numbers = true : this.strength.numbers = false;
    password.match(this.symbols) ? this.strength.symbols = true : this.strength.symbols = false;

    return this.strength;
  }

}
