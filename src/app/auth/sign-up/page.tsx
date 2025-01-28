import { Button, TextField } from "@mui/material";
import Link from "next/link";

export default function SignUp() {
  return (
    <div>
      <div className="p-8">
        <Button variant="text" className="!absolute right-8 top-8">
          <Link href="/auth/sign-in" className="font-semibold text-foreground">
            Já tenho uma conta
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">Cadastrar</h1>

            <p className="text-sm text-muted-foreground">Preencha os dados e crie uma conta</p>
          </div>
        </div>

        <form className="flex flex-col gap-5 mt-4 w-[380px]">
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="Primeiro Nome"
              id="firstName"
              type="text"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Sobrenome"
              id="secondName"
              type="text"
              variant="outlined"
              fullWidth
              required
            />
          </div>

          <div className="space-y-1">
            <TextField
              id="emai"
              type="email"
              className="w-full"
              label="E-mail"
              variant="outlined"
              required
            />
          </div>

          <TextField
            label="Idade"
            id="age"
            type="number"
            variant="outlined"
            fullWidth
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="Endereço"
              id="address"
              type="text"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Número"
              id="number"
              type="text"
              variant="outlined"
              fullWidth
              required
            />
          </div>

          <TextField
            label="Cidade"
            id="city"
            type="text"
            variant="outlined"
            fullWidth
            required
          />

          <TextField
            label="Número da Identidade"
            id="numberIdentity"
            type="text"
            variant="outlined"
            fullWidth
            required
          />

          <TextField
            label="Usuário"
            id="username"
            type="text"
            variant="outlined"
            fullWidth
            required
          />

          <TextField
            label="Senha"
            id="password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />

          <Button
            fullWidth
            className="!bg-primary !text-muted !mt-3"
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  )
}