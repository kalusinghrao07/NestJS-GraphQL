import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from 'src/authors/author.interface';
import { AuthorInput } from 'src/authors/author.input'

@Injectable()
export class AuthorService {
  constructor(@InjectModel('Author') private readonly authorModel: Model<Author>) {}

  async create(createAuthorDto: AuthorInput): Promise<Author> {
    const createdAuthor = new this.authorModel(createAuthorDto);
    return await createdAuthor.save();
  }

  async update(id: string, updateAuthorDto: AuthorInput): Promise<Author> {
    return await this.authorModel.findByIdAndUpdate(id, updateAuthorDto, { new: true });
  }

  async findAll() : Promise<Author[]> {
    return await this.authorModel.find().exec();
  }

  async findOne(authorId: string): Promise<Author> {
    return await this.authorModel.findOne({ _id: authorId });
  }

  async delete(authorId: string): Promise<Author> {
    return await this.authorModel.findByIdAndRemove(authorId);
  }
}