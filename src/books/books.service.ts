import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {
    private books: Book[] = [
        {
            id: 1,
            title: 'The Great Gatsby',
            isbn: '9780743273565',
            author: 'F. Scott Fitzgerald',
            publicationYear: 1925,
            isAvailable: true
        }
    ]

    //import semua data buku
    findAll(): Book[] {
        return this.books;
    }

    //menambahkan data buku baru
    create(createBookDto: CreateBookDto): string {
        const newBook: Book = {
            id: this.books.length + 1,
            title: createBookDto.title,
            isbn: createBookDto.isbn,
            author: createBookDto.author,
            publicationYear: createBookDto.publicationYear,
            isAvailable: createBookDto.isAvailable
        };

        //simpan database
        this.books.push(newBook);

        return newBook.title + ' berhasil ditambahkan';
    }

    //menampilkan data buku berdasarkan id
    findById(id: string): string {
        return `Data buku berdasarkan id: ${id}`;
    }

    //mengubah data buku berdasarkan id
    update(id: string): string {
        return `Data buku dengan id ${id} berhasil diperbarui`;
    }

    //mengubah sebagian data buku berdasarkan id
    patch(id: string): string {
        return `Data buku dengan id ${id} berhasil diperbarui sebagian`;
    }

    //menghapus data buku berdasarkan id
    delete(id: string): string {
        return `Data buku dengan id ${id} berhasil dihapus`;
    }
}
