import { PartialType } from '@nestjs/mapped-types';
import { CreateThanaDto } from './create-thana.dto';

export class UpdateThanaDto extends PartialType(CreateThanaDto) {}
