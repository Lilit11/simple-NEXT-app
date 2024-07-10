import Image from "next/image";
import { getAllBooks } from "./lib/action";
import { Book } from "./lib/components/book";

export default async function Home() {

  const books = await getAllBooks()
  
  return (
    <main >
      <div className="container is-flex" >
      {
        books.map(book=> <Book key={book.id} book={book}/>)
      }
      </div>
    </main>
  );
}



