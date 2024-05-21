import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpecialisationService } from './specialisation.service';
// import { CreateSpecialisationDto } from './dto/create-specialisation.dto';
// import { UpdateSpecialisationDto } from './dto/update-specialisation.dto';
import { Specialisation } from './entities/specialisation.entity';
import { Crud, CrudController } from '@dataui/crud';

@Crud({
  model: {
    type: Specialisation,
  },
})
@Controller('specialisation')
export class SpecialisationController implements CrudController<Specialisation> {
  constructor(public service: SpecialisationService) {}
}
/*
@Controller('specialisation')
export class SpecialisationController {
  constructor(private readonly specialisationService: SpecialisationService) {}

  @Post()
  create(@Body() createSpecialisationDto: CreateSpecialisationDto) {
    return this.specialisationService.create(createSpecialisationDto);
  }

  @Get()
  findAll() {
    return this.specialisationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialisationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpecialisationDto: UpdateSpecialisationDto,
  ) {
    return this.specialisationService.update(+id, updateSpecialisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialisationService.remove(+id);
  }
}
*/
