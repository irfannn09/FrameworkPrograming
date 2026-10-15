import { Controller, Get, Post, Param, Put, Delete, Patch } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book-dto.js';
import { Body } from '@nestjs/common';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    getBooks() {
        return this.booksService.findAll();
    }

    @Post()
    createBook(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    //menampilkan data buku berdasarkan id
    @Get(':id')
    getBookById(@Param('id') id: string) {
        return this.booksService.findById(id);
    }

    @Put(':id')
    updateBook(@Param('id') id: string) {
        return this.booksService.update(id);
    }

    @Patch(':id')
    patchBook(@Param('id') id: string) {
        return this.booksService.patch(id);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string) {
        return this.booksService.delete(id);
    }
}
