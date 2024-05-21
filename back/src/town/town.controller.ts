import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TownService } from './town.service';
import { CreateTownDto } from './dto/create-town.dto';
import { UpdateTownDto } from './dto/update-town.dto';
import { Town } from './entities/town.entity';
import { Crud, CrudController } from '@dataui/crud';

@Crud({
  model: {
    type: Town,
  },
})
@Controller('town')
export class TownController implements CrudController<Town> {
  constructor(public service: TownService) {}
}
/*
@Controller('town')
export class TownController {
  constructor(private readonly townService: TownService) {}

  @Post()
  create(@Body() createTownDto: CreateTownDto) {
    return this.townService.create(createTownDto);
  }

  @Get()
  findAll() {
    return this.townService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.townService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTownDto: UpdateTownDto) {
    return this.townService.update(+id, updateTownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.townService.remove(+id);
  }
}
*/
