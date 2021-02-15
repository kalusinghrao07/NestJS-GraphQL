import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from 'src/books/book.module';
import { AuthorModule } from 'src/authors/author.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),    
    MongooseModule.forRoot('mongodb://localhost/nestgraphql')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
