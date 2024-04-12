import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Аналитика",
    description: "Административный портал для тикетов",
  };

export default function Analytics() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            Analytics page
        </main>
    );
}