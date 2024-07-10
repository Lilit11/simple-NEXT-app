import Link from "next/link"
import { IBook } from "../types"

interface IProps {
    book: IBook
}
export const Book: React.FC<IProps> = ({ book }) => {

    return <div>
        <img src={book.photo} />
        <p>{book.title}</p>
        <p>{book.price}</p>
        <Link href={`/book/${book.id}`}>...info</Link>
    </div>
}


