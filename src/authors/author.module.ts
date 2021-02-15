import { BookModule } from 'src/books/book.module';
import { Module, forwardRef } from '@nestjs/common';
import { AuthorService } from 'src/authors/author.service';
import { AuthorResolver } from 'src/authors/author.resolver';
import { AuthorSchema } from 'src/authors/author.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]), forwardRef(() => BookModule)],
  providers: [AuthorService, AuthorResolver],
  exports: [AuthorService]
})
export class AuthorModule {}
