import { Metadata } from "next"
import Image from "next/image"


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
  const overpricing = 99
  const user_rating = 4.7
  const date = "12.04.2024"

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="grid grid-cols-2 gap-4 w-2/3 mtb-10">
        <div className="col-span-2">
          <p>Жалоба №{ticket.id}</p>
          <p className="text-2xl font-bold">{ticket.title}</p>
          <p>Магазин продуктов "Молоко", г. Донецк, пр. Мира 8а</p>

        </div>
        <div>
          <p>12.04.2024</p>
        </div>
        <div className="flex justify-self-end">
          <p>Мажан </p>
          <p>Р. </p>
          <p>С. </p>
          <p>{user_rating}<span>&#11088;</span></p>
        </div>
        <div className="flex items-center">
          <p>Завышение цены на <b>{overpricing}</b> руб</p>
        </div>
        <div className="flex flex-col justify-self-end">
          <p className="text-sky-950 font-semibold"><span>&#128172;</span> На рассмотрении</p>
          {/* <p className="text-rose-950 font-semibold"><span>&#10060;</span> Отклонён</p>
          <p className="text-green-950 font-semibold"><span>&#9989;</span> Принят</p> */}
        </div>
        <div className="flex col-span-2 items-center">
          <Image alt="price_photo" src="/price.jpg" width={500} height={200} />
        </div>






      </div>
    </main>
  );
}