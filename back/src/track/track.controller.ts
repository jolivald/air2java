import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrackService } from './track.service';
// import { CreateTrackDto } from './dto/create-track.dto';
// import { UpdateTrackDto } from './dto/update-track.dto';
import { Crud, CrudController } from '@dataui/crud';
import { Track } from './entities/track.entity';

@Crud({
  model: {
    type: Track,
  },
})
@Controller('track')
export class TrackController implements CrudController<Track> {
  constructor(public service: TrackService) {}
}
/*
@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.trackService.create(createTrackDto);
  }

  @Get()
  findAll() {
    return this.trackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
    return this.trackService.update(+id, updateTrackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trackService.remove(+id);
  }
}
*/
