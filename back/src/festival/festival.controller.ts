import { Controller, UseInterceptors } from "@nestjs/common";
import { Crud, CrudController } from "@dataui/crud";
import { Festival } from "./entities/festival.entity";
import { FestivalService } from "./festival.service";

@Crud({
  model: {
    type: Festival,
  },
  query: {
    join: {
      person: {
        eager: true,
      },
      town: {
        eager: true,
      },
    },
  },
})
@Controller('festival')
export class FestivalController implements CrudController<Festival> {
  constructor(public service: FestivalService) {}
}

// ---8<--- 

/*
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FestivalService } from './festival.service';
import { CreateFestivalDto } from './dto/create-festival.dto';
import { UpdateFestivalDto } from './dto/update-festival.dto';

@Controller('festival')
export class FestivalController {
  constructor(private readonly festivalService: FestivalService) {}

  @Post()
  create(@Body() createFestivalDto: CreateFestivalDto) {
    return this.festivalService.create(createFestivalDto);
  }

  @Get()
  findAll() {
    return this.festivalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.festivalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFestivalDto: UpdateFestivalDto,
  ) {
    return this.festivalService.update(+id, updateFestivalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.festivalService.remove(+id);
  }
}
*/