import { Controller, Post, Body, Get, Put, Delete, Param, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from 'src/entities/users.entity';
import { DeepPartial } from 'typeorm';
import { PermissionEntity } from 'src/entities/permissions.entity';
import { RoleEntity } from 'src/entities/roles.entity';
import { registerDTO } from 'src/interfaces/register.dto';
import { AuthGuard } from 'src/middlewares/auth.middleware';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('register')
  async createUser(@Body() body: registerDTO) {
    return await this.service.createUser(body);
  }

  @Get()
  async getUsers(): Promise<UserEntity[]> {
    return await this.service.getUsers();
  }

  @Put(':id')
  async actualizarUser(@Param() param: { id: number }, @Body() user: DeepPartial<UserEntity>): Promise<UserEntity> {
    return await this.service.actualizarUser(param, user);
  }

  @Delete(':id')
  async deleteUser(@Param() param: { id: number }): Promise<string> {
    return await this.service.deleteUser(param.id);
  }

  @Post(':id/permissions')
  async asignarPermissionAUser(@Param() param: { id: number }, @Body() permission_body: DeepPartial<PermissionEntity>): Promise<UserEntity> {
    return await this.service.asignarPermissionAUser(param, permission_body);
  }

  @Post(':id/roles')
  async asignarRoleAUser(@Param() param: { id: number }, @Body() role_body: DeepPartial<RoleEntity>): Promise<UserEntity> {
    return await this.service.asignarRoleAUser(param, role_body);
  }

  @Post('login')
  login(@Body() body: registerDTO) {
    return this.service.login(body);
  }

  @UseGuards(AuthGuard)
  @Get('can-do/:permission')
  canDo(@Req() request: Request & { user: UserEntity }, @Param('permission') permission_id: number): Promise<boolean> {
    return this.service.canDo(request.user, permission_id);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  me(@Req() req: Request & { user: UserEntity }) {
    return {
      firstName: req.user.email,
    };
  }
}
