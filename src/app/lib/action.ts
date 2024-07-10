import { readFile } from "fs/promises";
import { IBook } from "./types";
import { notFound } from "next/navigation";

export const getAllBooks = async (): Promise<IBook[]> => {

    const books = await readFile('/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/books.json', 'utf-8')

    if (books) {
        return JSON.parse(books)
    }
    return []

}

export const getBookById = async (id:number):Promise<IBook| undefined> =>{
    const books = await readFile('/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/books.json', 'utf-8')

    const bookList:IBook[] = JSON.parse(books)
    console.log(bookList);
    
    const found = bookList.find(book => book.id==id)

    console.log(found);
    
    if(found){
        return found  

    } else{
        notFound()
    }
  
}