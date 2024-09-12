import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly postService: PostsService) { }

    @Get('/:postId?')
    public getPosts(
        @Param('postId') postId: string
    ) {
        return this.postService.getPosts(postId);
    }

}
