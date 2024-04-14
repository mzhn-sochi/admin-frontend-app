import { Metadata } from "next";
import StatusChart from "@/components/StatusChart";
import { Table, TableHead, TableHeader, TableRow, TableBody } from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Аналитика",
  description: "Административный портал для тикетов",
};

export default function Analytics() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <p className="text-4xl font-bold mt-10">Добро пожаловать на страницу аналитки жалоб</p>
      <div className="grid w-2/3 grid-cols-2 grid-rows-2 gap-4">
        <div>
          <StatusChart/>
        </div>
        <div>
          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        Mагазин
                    </TableHead>
                    <TableHead>
                        Кол-во жалоб
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
