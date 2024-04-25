import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialisationDto } from './create-specialisation.dto';

export class UpdateSpecialisationDto extends PartialType(CreateSpecialisationDto) {}
