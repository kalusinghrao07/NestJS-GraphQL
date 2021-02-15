import { AuthorModule } from 'src/authors/author.module';
import { BookSchema } from 'src/books/book.schema';
import { Module, forwardRef } from '@nestjs/common';
import { BookService } from 'src/books/book.service';
import { BookResolver } from 'src/books/book.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [forwardRef(() => AuthorModule), MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  providers: [BookService, BookResolver],
  exports: [BookService]
})
export class BookModule {}
