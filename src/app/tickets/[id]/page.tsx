import { Metadata } from "next"


type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  return {
    title: "Тикет " + id,
  }
}

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 120
    }
  })
  return response.json();
};


export default async function Ticket({ params: { id } }: Props) {
  const ticket = await getData(id)
  
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className="w-2/3">
          <p>{ticket.id}</p>
          <p>{ticket.title}</p>
          <p>Магазин</p>
          <p>Дата</p>
          <p>Статус</p>
          <p>Имя</p>
          <p>Фамилия</p>
          <p>Отчество</p>
        </div>
    </main>
  );
}