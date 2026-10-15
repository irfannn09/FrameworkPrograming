export class CreateBookDto {
    readonly title: string;
    readonly isbn: string;
    readonly author: string;
    readonly publicationYear: number;
    readonly isAvailable: boolean;
}