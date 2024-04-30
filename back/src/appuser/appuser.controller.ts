import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { AppuserService } from './appuser.service';
import { CreateAppuserDto } from './dto/create-appuser.dto';
import { UpdateAppuserDto } from './dto/update-appuser.dto';
import { PasswordInterceptor } from 'src/transform/password.interceptor';
import JwtAuthenticationGuard from 'src/authentication/jwtAuthentication.guard';
import { Roles } from 'src/authentication/roles.decorator';
import { Role } from 'src/authentication/role.enum';
import { RolesGuard } from 'src/authentication/roles.guard';

@Controller('appuser')
@UseGuards(JwtAuthenticationGuard, RolesGuard)
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
  @Roles(Role.Admin, Role.User)
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
