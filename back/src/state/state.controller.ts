import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StateService } from './state.service';
// import { CreateStateDto } from './dto/create-state.dto';
// import { UpdateStateDto } from './dto/update-state.dto';
import { State } from './entities/state.entity';
import { Crud, CrudController } from '@dataui/crud';


@Crud({
  model: {
    type: State,
  },
})
@Controller('state')
export class StateController implements CrudController<State> {
  constructor(public service: StateService) {}
}

/*
@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  create(@Body() createStateDto: CreateStateDto) {
    return this.stateService.create(createStateDto);
  }

  @Get()
  findAll() {
    return this.stateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStateDto: UpdateStateDto) {
    return this.stateService.update(+id, updateStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stateService.remove(+id);
  }
}
*/
