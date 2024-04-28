import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { AppuserService } from './appuser.service';
import { CreateAppuserDto } from './dto/create-appuser.dto';
import { UpdateAppuserDto } from './dto/update-appuser.dto';
import { PasswordInterceptor } from 'src/transform/password.interceptor';

@Controller('appuser')
@UseInterceptors(PasswordInterceptor)
export class AppuserController {
  constructor(private readonly appuserService: AppuserService) {}

  @Post()
  create(@Body() createAppuserDto: CreateAppuserDto) {
    return this.appuserService.create(createAppuserDto);
  }

  @Get()
  findAll() {
    return this.appuserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appuserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppuserDto: UpdateAppuserDto) {
    return this.appuserService.update(+id, updateAppuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appuserService.remove(+id);
  }
}
