import { ApiProperty } from '@nestjs/swagger';
import { IsUserClientWorking } from './is-user-client-woking.decorator';

export class CatDto{
  @ApiProperty()
  @IsUserClientWorking()
  data:string
}
