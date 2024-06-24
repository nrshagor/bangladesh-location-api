import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RestrictMethodsMiddleware } from './common/middleware/restrict-methods.middleware';
import { DivisionsService } from './modules/divisions/divisions.service';
import { DistrictsService } from './modules/districts/districts.service';
import { ThanaService } from './modules/thana/thana.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = ['*'];

  // Configure CORS
  app.enableCors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Allow cookies to be sent and received
  });

  // Apply the middleware
  app.use(new RestrictMethodsMiddleware().use);

  // Seed data for divisions
  const divisionsSeederService = app.get(DivisionsService);
  await divisionsSeederService.seedDataIfNotExists();

  // Seed data for districts
  const districtsSeederService = app.get(DistrictsService);
  await districtsSeederService.seedDataIfNotExists();

  // Seed data for thana
  const thanaSeederService = app.get(ThanaService);
  await thanaSeederService.seedDataIfNotExists();

  await app.listen(3000);
}
bootstrap();
