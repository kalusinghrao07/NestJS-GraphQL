import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/books/book.interface';
import { BookInput } from 'src/books/book.input'

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async create(createBookDto: BookInput): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return await createdBook.save();
  }

  async update(id: string, updateBookDto: BookInput): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(id, updateBookDto, { new: true });
  }

  async findAll() : Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async findOne(bookId: string): Promise<Book> {
    return await this.bookModel.findOne({ _id: bookId });
  }

  async delete(bookId: string): Promise<Book> {
    return await this.bookModel.findByIdAndRemove(bookId);
  }
}