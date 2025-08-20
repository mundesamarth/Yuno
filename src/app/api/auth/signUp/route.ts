import { NextResponse } from "next/server";
import {prisma} from "@/lib/db"
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  // 1. Get data from request body
  try {
    const data = await request.json();
    const { name, email, password } = data;

    // 2. Validate the data
    if (!name.trim() || !email.trim() || !password.trim()) {
      return NextResponse.json(
        { error: "Fields cannot be empty" },
        { status: 400 }
      );
    }
    if (password.length < 8 || password.length > 32) {
      return NextResponse.json(
        { error: "Password must be min 8 character or max 32 character" },
        { status: 400 }
      );
    }

  // 3. Check if user exists with prisma.user.findUnique
  const user = await prisma.user.findUnique({
    where:{
        email:email,
    }
  })

  if(user){
    return NextResponse.json(
        {error: "User already exist"},
        {status: 409}
    )
  }
  // 4. Hash password with bcrypt.hash(password, 10)

  const hashedPassword = await bcrypt.hash(password,10);
  // 5. Create user with prisma.user.create
  const newUser = await prisma.user.create({
    data:{
        email:email,
        name:name,
        password:hashedPassword
    }
  })


// 6. Return success response
return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }  // 201 = Created
  );
  } catch (error) {
    console.log("Some error", error)
    return NextResponse.json(
      { error: "Invalid Request Data" },
      { status: 500 }
    );
  }

  // return Response.json({res})

}
