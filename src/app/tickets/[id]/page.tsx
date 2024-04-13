import { Ticket } from "@/app/ticket"
import { getStatusString, unixToDate } from "@/app/tools"
import { Metadata } from "next"
import Image from "next/image"

const host = "77.221.158.75:8080"

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
  const response = await fetch(`http://${host}/api/v1/tickets/${id}`, {
    next: {
      revalidate: 120
    }
  })
  return response.json();
};


export default async function Page({ params: { id } }: Props) {
  const response = await getData(id)
  console.log(response)

  const ticket: Ticket = response.data
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="grid grid-cols-2 gap-4 w-2/3 mt-10 mb-10">
        <div className="col-span-2">
          <p>Жалоба №{ticket.id}</p>
          <p className="text-2xl font-bold">{ticket.shopAddress}</p>
        </div>
        <div>
          <p>Дата создания: {unixToDate(ticket.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="flex justify-self-end">
          {ticket.userId}
        </div>
        <div>
          <p>Дата обновления: {unixToDate(ticket.updatedAt).toLocaleDateString()}</p>
        </div>
        <div className="flex justify-self-end">
          <p>{getStatusString(ticket.status)}</p>
          {/* <p className="text-rose-950 font-semibold"><span>&#10060;</span> Отклонён</p>
          <p className="text-green-950 font-semibold"><span>&#9989;</span> Принят</p> */}
        </div>
        <div className="flex col-span-2 justify-center bg-slate-500 rounded-lg">
          <Image alt="price_photo" src={`http://77.221.158.75:9000/prod/${ticket.imageUrl}`} width={500} height={200} />
        </div>






      </div>
    </main>
  );
}