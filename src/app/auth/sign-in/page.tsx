import { Button, Input } from "@mui/material";
import Link from "next/link";

export default function SignIn() {
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

        <form className="flex flex-col gap-5 mt-4">
          <div className="space-y-1">
            <label htmlFor="email">Seu e-mail</label>
            <Input
              id="emai"
              type="email"
              className="w-full"
              placeholder="e-mail"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email">Sua senha</label>
            <Input
              id="emai"
              type="email"
              className="w-full"
              placeholder="senha"
            />
          </div>

          <Button
            fullWidth
            className="!bg-primary !text-muted !mt-3"
          >
            Acessar
          </Button>
        </form>
      </div>
    </div>
  )
}