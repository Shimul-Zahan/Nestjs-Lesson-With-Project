import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';

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
        return 'Create Post Here';
    }
} 
