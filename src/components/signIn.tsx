"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

export default function SignInForm() {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget )

    await signIn();
  }

  return (
    <Card className="mt-20">
      <CardHeader>
        <CardTitle>Авторизация</CardTitle>
        <CardDescription>Пожалуйста, войдите в систему.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>

        

        <CardContent>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="phone_number">Телефон</Label>
            <Input id="phone_nuber" type="tel" placeholder="Ваш телефон..." required />
          </div>
          <div className="flex flex-col space-y-1.5 pt-4">
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" placeholder="Ваш пароль..." required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Вход</Button>
        </CardFooter>
      </form>

    </Card>
  );
}