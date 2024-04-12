
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Жалобы",
  description: "Административный портал для тикетов",
};

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10
    }
  })
  return response.json();
};

export default async function Tickets() {
  const tickets = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center">

      <div className="flex w-full h-80 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 mb-10">
        <div className="flex w-2/3">
          <Input placeholder="Название, продукт или магазин..." />
          <Button className="ml-2">Поиск</Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Id
            </TableHead>
            <TableHead>
              Продукт
            </TableHead>
            <TableHead>
              Магазин
            </TableHead>
            <TableHead>
              Дата
            </TableHead>
            <TableHead>
              Заявитель
            </TableHead>
            <TableHead>
              Завышение цены
            </TableHead>
            <TableHead>
              Статус
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket: any) => (
            <TableRow key={tickets.ticket}>
              <TableCell>
                <Link href={`/tickets/${ticket.id}` }>{ticket.id}</Link>
              </TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}