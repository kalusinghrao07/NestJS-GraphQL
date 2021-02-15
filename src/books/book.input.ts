import { InputType, Field, Int, ID } from '@nestjs/graphql';
import { AuthorInput } from 'src/authors/author.input';

@InputType()
export class BookInput {
  @Field()
  title: string;

  @Field()
  description: string;
  
  @Field(() => Int)
  price: number; 
  
  @Field(() => ID)
  authors: [string]
}