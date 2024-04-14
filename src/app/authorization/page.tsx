import SignInForm from "@/components/signIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Административный портал для тикетов",
};

export default function Auth() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <SignInForm/>
    </main>
  );
}