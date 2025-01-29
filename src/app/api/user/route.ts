import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req);
  const { data, error } = await supabase.auth.getUser();
  if (error) return NextResponse.json({ error: error.message }, { status: 401 });

  return NextResponse.json({ data: data.user });
}

export async function POST(req: NextRequest) {
  const {
    firstName,
    secondName,
    email,
    age,
    address,
    number,
    city,
    numberIndentity,
    username,
    password,
  } = await req.json()

  const { data, error } = await supabase.from('users').insert([
    firstName,
    secondName,
    email,
    age,
    address,
    number,
    city,
    numberIndentity,
    username,
    password,
  ]);

  if (error) return NextResponse.json({ erorr: error.message }, { status: 404 });

  return NextResponse.json(data, { status: 201 });
}