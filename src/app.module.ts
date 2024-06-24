import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database/database.module';
import { RestrictMethodsMiddleware } from './common/middleware/restrict-methods.middleware';
import { ConfigModule } from '@nestjs/config';
import { DivisionsModule } from './modules/divisions/divisions.module';
import { DistrictsModule } from './modules/districts/districts.module';
import { ThanaModule } from './modules/thana/thana.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, DivisionsModule, DistrictsModule, ThanaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RestrictMethodsMiddleware).forRoutes('*');
  }
}
