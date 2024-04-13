import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { Metadata } from "next";
import Link from "next/link";
import { getStatusString, unixToDate } from "../tools";
import { Ticket } from "../ticket";
import PaginationControls from "@/components/my-pagination";

export const metadata: Metadata = {
  title: "Жалобы",
  description: "Административный портал для тикетов",
};

const host = "77.221.158.75:8080"

async function getData(limit: number, offset: number) {
  const response = await fetch(`http://${host}/api/v1/tickets/?limit=${limit}&offset=${offset}`, {
    next: {
      revalidate: 10
    }
  })
  return response.json();
};

export default async function Page({ searchParams, }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  
  const page = searchParams['page'] ?? '1'
  const perPage = searchParams['perPage'] ?? '10'

  const start =  (Number(page) -1 )  * Number(perPage)
  const end = start + Number(perPage)
  
  const response = await getData(Number(perPage) + 1, start)
  console.log(response.data.tickets)

  const tickets: Ticket[] = response.data.tickets;
  const total: number = response.data.total;

  // console.log(total)

  return (
    <main className="flex min-h-screen flex-col items-center mb-10">

      <div className="flex w-full h-80 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 mb-10">
        <div className="flex w-2/3">
          <Input placeholder="Название, продукт или магазин..." />
          <Button className="ml-2">Поиск</Button>
        </div>
      </div>

      <Table className="w-full mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>
              Id
            </TableHead>
            <TableHead>
              Uid
            </TableHead>
            <TableHead>
              Магазин
            </TableHead>
            <TableHead>
              Создан
            </TableHead>
            <TableHead>
              Обновлен
            </TableHead>
            <TableHead>
              Статус
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket: Ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>
                <Link href={`/tickets/${ticket.id}`}>{ticket.id}</Link>
              </TableCell>
              <TableCell>{ticket.userId}</TableCell>
              <TableCell>{ticket.shopAddress}</TableCell>
              <TableCell>{unixToDate(ticket.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{unixToDate(ticket.updatedAt).toLocaleDateString()}</TableCell>
              <TableCell>{getStatusString(ticket.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationControls
        hasNextPage={end < tickets.length}
        hasPrevPage={start > 0}
      />

    </main>
  );
}