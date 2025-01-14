import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'The unique ID of the user' })
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty({ description: 'The name of the user' })
    @IsString()
    @IsNotEmpty()
    name: string;
}
