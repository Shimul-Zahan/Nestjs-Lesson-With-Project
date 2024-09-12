import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUsersParamDto {
    @IsOptional()
    @IsInt()
    // Transform string url to inter for 'id'
    @Type(() => Number)
    id?: number;
}