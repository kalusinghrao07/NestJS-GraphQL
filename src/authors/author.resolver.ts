import { Resolver, Query, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql'
import { Inject, Body } from '@nestjs/common';
import { AuthorService } from '../authors/author.service';
import { BookService } from '../books/book.service';
import { AuthorDto } from './author.dto';
import { BookDto } from 'src/books/book.dto';
import { AuthorInput } from './author.input';
import { Author } from './author.interface';

@Resolver(() => AuthorDto)
export class AuthorResolver {
  constructor(
    @Inject(BookService) private bookService: BookService,
    @Inject(AuthorService) private authorService: AuthorService
  ) { }

  @Query(returns => [AuthorDto])
  async authors() {
    return await this.authorService.findAll();
  }

  @Query(returns => AuthorDto)
  async author(@Args('id') id: string) {
    return await this.authorService.findOne(id);
  }

  @Mutation(() => AuthorDto)
  async createAuthor(@Args('input') input: AuthorInput) {
    return await this.authorService.create(input);
  }

  @Mutation(() => AuthorDto)
  async updateAuthor(
    @Args('id') id: string,
    @Args('input') input: AuthorInput,
  ) {
    return this.authorService.update(id, input);
  }

  @Mutation(() => AuthorDto)
  async deleteAuthor(@Args('id') id: string) {
    return this.authorService.delete(id);
  }

  @ResolveField(() => BookDto)
  async books(@Parent() author) {
    const { id } = author;
    return this.bookService.findOne(id);
  }
}