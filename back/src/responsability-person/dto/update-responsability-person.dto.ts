import { PartialType } from '@nestjs/mapped-types';
import { CreateResponsabilityPersonDto } from './create-responsability-person.dto';

export class UpdateResponsabilityPersonDto extends PartialType(CreateResponsabilityPersonDto) {}
