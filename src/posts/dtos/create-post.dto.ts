import { IsArray, IsEmpty, IsEnum, IsISO8601, IsJSON, isNotEmpty, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { PostStatus } from "../enum/PostStatus.enum";
import { PostType } from "../enum/postType.enum";
import { CreateMetaOptionsDto } from "./createMeatOption.dto";
import { Type } from "class-transformer";


export class CreatePostDto {

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title: string;

    @IsEnum(PostType)
    @IsNotEmpty()
    postType: PostType;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-zA-Z]+)*$/, {
        message: 'Slug should only contain lowercase letters, numbers, and hyphens.'
    })
    slug: string;

    @IsEnum(PostStatus)
    status: PostStatus;

    @IsString()
    @IsOptional()
    content?: string;

    @IsString()
    @IsOptional()
    @IsJSON()
    schema?: string;

    @IsString()
    @IsOptional()
    @IsUrl()
    featuredImageUrl?: string;

    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @IsOptional()
    @IsArray()
    @IsString({ each: true }) //check all value of a array of string
    @MinLength(3, { each: true })
    tags?: string[];


    // here nested dto works
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateMetaOptionsDto)
    metaOptions: CreateMetaOptionsDto[]

}