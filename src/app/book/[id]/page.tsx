import { getBookById } from "@/app/lib/action"
import { Book } from "@/app/lib/components/book"
import { notFound } from "next/navigation"

interface IProps {
    params: { id: number }
}
export default async function Page(props: IProps) {

    const found = await getBookById(props.params.id)

    if (!found) {
        notFound()
    }

    return <div>
        <img src={found?.photo} width={250} />
        <h1>{found?.title}</h1>
    </div>
}