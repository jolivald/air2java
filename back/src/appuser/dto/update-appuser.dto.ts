import { PartialType } from '@nestjs/mapped-types';
import { CreateAppuserDto } from './create-appuser.dto';

export class UpdateAppuserDto extends PartialType(CreateAppuserDto) {}
