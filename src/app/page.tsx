import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <div className="flex w-full h-80 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 mb-10">
        <p className="w-2/3 font-bold text-white text-4xl">Добро пожаловать на административный портал</p>
      </div>

      <div className="flex w-120 items-center">
        <p>Добро пожаловать на административный сервис для обработки, аналитики жалоб на цены социальных продуктов</p>
      </div>
    </main>
  );
}
