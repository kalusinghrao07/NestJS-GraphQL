import { Resolver, Query, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql'
import { Inject } from '@nestjs/common';
import { BookDto } from 'src/books/book.dto';
import { AuthorDto } from 'src/authors/author.dto';
import { AuthorService } from '../authors/author.service';
import { BookService } from '../books/book.service';
import { BookInput } from './book.input';
import { AuthorInput } from 'src/authors/author.input';
import { Book } from './book.interface';

@Resolver(() => BookDto)
export class BookResolver {
  constructor(
    @Inject(BookService) private bookService: BookService,
    @Inject(AuthorService) private authorService: AuthorService
  ) { }

  @Query(() => [BookDto])
  async books() {
    return await this.bookService.findAll();
  }

  @Query(() => BookDto)
  async book(@Args('id') id: string) {
    return await this.bookService.findOne(id);
  }

  @Mutation(() => BookDto)
  async createBook(@Args('input') input: BookInput) {
    console.log(input);
    return await this.bookService.create(input);
  }

  @Mutation(() => BookDto)
  async updateBook(
    @Args('id') id: string,
    @Args('input') input: BookInput,
  ) {
    return this.bookService.update(id, input);
  }

  @Mutation(() => BookDto)
  async deleteBook(@Args('id') id: string) {
    return this.bookService.delete(id);
  }

  @ResolveField(() => AuthorDto)
  async authors(@Parent() book) {
    const { id } = book;
    return this.authorService.findOne(id);
  }  

}