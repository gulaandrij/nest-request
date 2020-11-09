import { ApiProperty } from '@nestjs/swagger';
import { IsUserClient } from './is-user-client.decorator';

export class DogDto{
  @ApiProperty()
  @IsUserClient()
  data:string
}
