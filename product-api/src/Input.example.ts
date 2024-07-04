import { IsEmail, IsNotEmpty } from 'class-validator';

export class InputExample {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
