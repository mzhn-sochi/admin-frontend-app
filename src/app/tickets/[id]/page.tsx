import { Ticket } from "@/app/ticket";
import { getStatusString, unixToDate } from "@/app/tools";
import { Metadata } from "next";
import Image from "next/image";
import { API_URL, DATA_PORT, IMAGES_PORT } from "@/../configs/globals";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: "Жалоба " + id,
  };
}

async function getData(id: string) {
  const response = await fetch(
    `http://${API_URL}:${DATA_PORT}/api/v1/tickets/${id}`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  return response.json();
}

export default async function Page({ params: { id } }: Props) {
  const response = await getData(id);
  console.log('Тикет')
  console.log(response);

  const ticket: Ticket = response.data;
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="grid grid-cols-2 gap-4 w-2/3 mt-10 mb-10">
        <div>
          <div>
            <p className="text-sm">Жалоба №{ticket.id}</p>
            <p className="text-2xl font-bold">{ticket.shopName}{" "}{ticket.shopAddress}</p>
          </div>
          <div className="flex flex-col mt-4">
            <p>👤 {ticket.userId}</p>
            <p>
              {ticket.lastName} {ticket.firstName.charAt(0)}.{" "}
              {ticket.middleName.charAt(0)}.
            </p>
          </div>
          <div className="mt-4">
            <p>
              Дата создания: {unixToDate(ticket.createdAt).toLocaleDateString()}
            </p>
            <p>
              Дата обновления:{" "}
              {ticket.updatedAt == null
                ? "---"
                : unixToDate(ticket.updatedAt).toLocaleDateString()}
            </p>
          </div>
          <Alert className="mt-4">
            <AlertTitle>{getStatusString(ticket.status)}</AlertTitle>
            <AlertDescription>
              {ticket.reason ? <p>{ticket.reason}</p> : <></>}
            </AlertDescription>
          </Alert>
          <div className="flex justify-between mt-4 align-bottom">
            <Button className="bg-green-600" disabled>
              Направить жалобу
            </Button>
            <Button className="bg-red-600" disabled>
              Отклонить
            </Button> 
          </div>
        </div>
        <div className="rounded-lg">
          <Image
            alt="price_photo"
            src={`http://${API_URL}:${IMAGES_PORT}/prod/${ticket.imageUrl}`}
            width={500}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
