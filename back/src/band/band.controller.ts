import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BandService } from './band.service';
// import { CreateBandDto } from './dto/create-band.dto';
// import { UpdateBandDto } from './dto/update-band.dto';
import { Band } from './entities/band.entity';
import { Crud, CrudController } from '@dataui/crud';

@Crud({
  model: {
    type: Band,
  },
})
@Controller('band')
export class BandController implements CrudController<Band> {
  constructor(public service: BandService) {}
}

/*
@Controller('band')
export class BandController {
  constructor(private readonly bandService: BandService) {}

  @Post()
  create(@Body() createBandDto: CreateBandDto) {
    return this.bandService.create(createBandDto);
  }

  @Get()
  findAll() {
    return this.bandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBandDto: UpdateBandDto) {
    return this.bandService.update(+id, updateBandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bandService.remove(+id);
  }
}
*/
