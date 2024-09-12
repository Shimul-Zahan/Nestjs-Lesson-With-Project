import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {

    constructor(private readonly usersService: UsersService) { }

    getPosts(
        postId: string,
    ) {
        const user = this.usersService.getUserById(postId);
        return [
            { title: 'Post 1', content: 'This is post 1 content.' },
            { title: 'Post 2', content: 'This is post 2 content.' },
            { title: 'Post 3', content: 'This is post 3 content.' },
            { postId },
            { user }
        ];
    }

}
