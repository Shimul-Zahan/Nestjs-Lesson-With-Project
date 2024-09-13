import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { CreatePatchPostDto } from './dtos/createPatchPost.dto';

@Controller('posts')
export class PostsController {

    constructor(private readonly postService: PostsService) { }

    @Get('/:postId?')
    public getPosts(
        @Param('postId') postId: string
    ) {
        return this.postService.getPosts(postId);
    }

    @Post()
    public createPost(
        @Body() createPostDto: CreatePostDto,
    ) {

        const body = createPostDto;
        return this.postService.createPost(body)
    }


    @Patch()
    public updatePost(
        // @Param('postId') postId: string,
        @Body() createPatchPostDto: CreatePatchPostDto
    ) {

        const body = createPatchPostDto;
        return this.postService.updatePost(body)
    }
} 
