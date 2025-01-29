'use client'

import { Button, TextField } from "@mui/material";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema)
  });

  async function accessInternalArea(data: SignInFormData) {
    console.log(data);

    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify({ email: data.email, password: data.password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);
  }

  return (
    <div>
      <div className="p-8">
        <Button variant="text" className="!absolute right-8 top-8">
          <Link href="/auth/sign-up" className="font-semibold text-foreground">
            Criar uma conta
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">Entrar</h1>

            <p className="text-sm text-muted-foreground">Acesse a area interna</p>
          </div>
        </div>

        <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit(accessInternalArea)}>
          <TextField
            label="E-mail"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />

          <TextField
            label="Senha"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />

          <Button
            fullWidth
            className="!bg-primary !text-muted !mt-3"
            type="submit"
          >
            Acessar
          </Button>
        </form>
      </div>
    </div>
  )
}