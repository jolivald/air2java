import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAppuserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
