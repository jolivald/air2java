import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponsabilityPersonService } from './responsability-person.service';
import { CreateResponsabilityPersonDto } from './dto/create-responsability-person.dto';
import { UpdateResponsabilityPersonDto } from './dto/update-responsability-person.dto';

@Controller('responsability-person')
export class ResponsabilityPersonController {
  constructor(private readonly responsabilityPersonService: ResponsabilityPersonService) {}

  @Post()
  create(@Body() createResponsabilityPersonDto: CreateResponsabilityPersonDto) {
    return this.responsabilityPersonService.create(createResponsabilityPersonDto);
  }

  @Get()
  findAll() {
    return this.responsabilityPersonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsabilityPersonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponsabilityPersonDto: UpdateResponsabilityPersonDto) {
    return this.responsabilityPersonService.update(+id, updateResponsabilityPersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsabilityPersonService.remove(+id);
  }
}
