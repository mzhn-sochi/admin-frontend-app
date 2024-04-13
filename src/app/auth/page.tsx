import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Авторизация",
    description: "Административный портал для тикетов",
  };

export default function Auth() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Card className="mt-20">
                <CardHeader>
                    <CardTitle>Авторизация</CardTitle>
                    <CardDescription>Пожалуйста, войдите в систему.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="phone_number">Телефон</Label>
                        <Input id="phone_nuber" type="tel" placeholder="Ваш телефон..." />
                    </div>
                    <div className="flex flex-col space-y-1.5 pt-4">
                        <Label htmlFor="password">Пароль</Label>
                        <Input id="password" type="password" placeholder="Ваш пароль..." />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Вход</Button>
                </CardFooter>
            </Card>
        </main>
    );
}