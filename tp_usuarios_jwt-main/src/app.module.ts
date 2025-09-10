import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { entities } from './entities';
import { JwtModule } from './jwt/jwt.module';
import { AuthGuard } from './middlewares/auth.middleware';
import { join } from 'path/win32';

@Module({
  imports: [PermissionsModule, 
    UsersModule, 
    RolesModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'usuarios_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }), JwtModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
