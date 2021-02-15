import { ObjectType, Field, ID } from '@nestjs/graphql';
import { BookDto } from 'src/books/book.dto';

@ObjectType()
export class AuthorDto {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field(() => [BookDto])
    books: [BookDto]
}



