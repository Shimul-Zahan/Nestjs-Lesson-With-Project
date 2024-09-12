import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {

    getPosts() {
        return [
            { title: 'Post 1', content: 'This is post 1 content.' },
            { title: 'Post 2', content: 'This is post 2 content.' },
            { title: 'Post 3', content: 'This is post 3 content.' },
        ];
    }

}
