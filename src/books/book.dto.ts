import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AuthorDto } from 'src/authors/author.dto';
@ObjectType()
export class BookDto {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    price: number;

    @Field(() => [AuthorDto])
    authors: [AuthorDto]
}

