'use client'

import { Button, TextField } from "@mui/material";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  firstName: z.string().min(2, "O primeiro nome deve ter pelo menos 2 caracteres"),
  secondName: z.string().min(2, "O sobrenome deve ter pelo menos 2 caracteres"),
  email: z.string().email(),
  age: z
    .number({ invalid_type_error: "Idade é obrigatória" })
    .min(1, "A idade deve ser maior que 0"),
  address: z.string().min(5, "O endereço deve ter pelo menos 5 caracteres"),
  number: z.string().min(1, "Número é obrigatório"),
  city: z.string().min(2, "A cidade deve ter pelo menos 2 caracteres"),
  numberIdentity: z.string().min(5, "O número de identidade deve ter pelo menos 5 caracteres"),
  username: z.string().min(4, "O nome de usuário deve ter pelo menos 4 caracteres"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  function createRegistration(data: SignUpFormData) {
    console.log(data);
  }

  return (
    <div>
      <div className="p-8">
        <Button variant="text" className="!absolute right-8 top-8">
          <Link href="/auth/sign-in" className="font-semibold text-foreground">
            Já tenho uma conta
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6 mt-10">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">Cadastrar</h1>

            <p className="text-sm text-muted-foreground">Preencha os dados e crie uma conta</p>
          </div>
        </div>

        <form className="flex flex-col gap-5 mt-4 w-[380px]" onSubmit={handleSubmit(createRegistration)}>
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="Primeiro Nome"
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              label="Sobrenome"
              {...register("secondName")}
              error={!!errors.secondName}
              helperText={errors.secondName?.message}
            />
          </div>

          <div className="space-y-1">
            <TextField
              label="E-mail"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
          </div>

          <TextField
            label="Idade"
            type="number"
            {...register("age", { valueAsNumber: true })}
            error={!!errors.age}
            helperText={errors.age?.message}
          />

          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="Endereço"
              {...register("address")}
              error={!!errors.address}
              helperText={errors.address?.message}
              fullWidth
            />
            <TextField
              label="Número"
              {...register("number")}
              error={!!errors.number}
              helperText={errors.number?.message}
              fullWidth
            />
          </div>

          <TextField
            label="Cidade"
            {...register("city")}
            error={!!errors.city}
            helperText={errors.city?.message}
            fullWidth
          />

          <TextField
            label="Número da Identidade"
            {...register("numberIdentity")}
            error={!!errors.numberIdentity}
            helperText={errors.numberIdentity?.message}
            fullWidth
          />

          <TextField
            label="Usuário"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            fullWidth
          />

          <TextField
            label="Senha"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
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