import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-full h-80 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 mb-10">
        <p className="w-2/3 font-bold text-white text-4xl">
          Добро пожаловать на административный портал
        </p>
      </div>

      <div className="flex w-2/3 items-center">
        <p>
          Добро пожаловать на административный сервис для обработки, аналитики
          жалоб на цены социальных продуктов
        </p>
      </div>
      <div className="grid w-2/3 grid-cols-3 grid-rows-3 gap-4 mt-10 mb-10">
        <div className="flex col-span-3 col-start-1 row-start-1">
          <p className="text-2xl font-bold">Просмотр жалоб пользователей</p>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-2 bg-slate-600 border-2 border-pink-500">
          <Image src={"/1.jpg"} width={1000} height={500} alt="1" />
        </div>
        <div className="row-span-2 col-start-3 row-start-2">
          <p>Администрации доступна таблица всех жалоб/тикетов.</p>
        </div>
      </div>
      <div className="grid w-2/3 grid-cols-3 grid-rows-3 gap-4 mt-10 mb-10">
        <div className="flex col-span-3 col-start-1 row-start-1">
          <p className="text-2xl font-bold">Аналитика</p>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-2 bg-slate-600 border-2 border-purple-500">
          <Image src={"/3.jpg"} width={1000} height={500} alt="1" />
        </div>
        <div className="row-span-2 col-start-3 row-start-2">
          <p>Администрации доступна аналитика и статистика по критериям (кол-во жалоб, завышение цены и др.) жалоб/тикетов.</p>
        </div>
      </div>
      <div className="grid w-2/3 grid-cols-3 grid-rows-3 gap-4 mt-10 mb-10">
        <div className="flex col-span-3 col-start-1 row-start-1">
          <p className="text-2xl font-bold">Подробное описание тикета</p>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-2 bg-slate-600 border-2 border-pink-500">
          <Image src={"/2.jpg"} width={1000} height={500} alt="1" />
        </div>
        <div className="row-span-2 col-start-3 row-start-2">
          <p>Пользователям доступен подробный вид, если перейти по ID в таблице с тикетом.</p>
        </div>
      </div>
    </main>
  );
}
