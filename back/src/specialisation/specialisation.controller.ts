import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecialisationService } from './specialisation.service';
import { CreateSpecialisationDto } from './dto/create-specialisation.dto';
import { UpdateSpecialisationDto } from './dto/update-specialisation.dto';

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
  update(@Param('id') id: string, @Body() updateSpecialisationDto: UpdateSpecialisationDto) {
    return this.specialisationService.update(+id, updateSpecialisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialisationService.remove(+id);
  }
}
