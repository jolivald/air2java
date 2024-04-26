import { IsString, IsNotEmpty } from 'class-validator';

export class RegisterAppuserDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
