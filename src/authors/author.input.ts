import { InputType, Field } from '@nestjs/graphql';
import { BookInput } from 'src/books/book.input';

@InputType()
export class AuthorInput {
  @Field()
  name: string;

  // @Field(() => [BookInput])
  // books: [BookInput]
}