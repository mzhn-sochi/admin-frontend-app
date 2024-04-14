import { Metadata } from "next";
import StatusChart from "@/components/StatusChart";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";
import { API_URL, DATA_PORT } from "@/../configs/globals";

export const metadata: Metadata = {
  title: "Аналитика",
  description: "Административный портал для тикетов",
};

async function getShops() {
  const response = await fetch(
    `http://${API_URL}:${DATA_PORT}/api/v1/summary/shop`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  console.log("RESPONSE");
  console.log(response);
  return response.json();
}

export default function Analytics() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <p className="text-4xl font-bold mt-10">
        Добро пожаловать на страницу аналитки жалоб
      </p>
      <p className="text-semibold text-lg mt-10">
        Количество жалоб на каждый магазин
      </p>
      <div className="grid w-2/3 grid-cols-2 grid-rows-2 gap-4">
        <div>
          <StatusChart />
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mагазин</TableHead>
                <TableHead>Кол-во жалоб</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{}</TableBody>
          </Table>
        </div>
      </div>
      <p className="text-semibold text-lg mt-10">
        Количество жалоб от пользователя
      </p>
      <div className="grid w-2/3 grid-cols-2 grid-rows-2 gap-4">
        <div>
          <StatusChart />
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Пользователь</TableHead>
                <TableHead>Кол-во жалоб</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{}</TableBody>
          </Table>
        </div>
      </div>
      <p className="text-semibold text-lg mt-10">
        Количество жалоб со статусом
      </p>
      <div className="grid w-2/3 grid-cols-2 grid-rows-2 gap-4">
        <div>
          <StatusChart />
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Статус</TableHead>
                <TableHead>Кол-во жалоб</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{}</TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
