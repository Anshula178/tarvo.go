import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"
import { NextRequest,NextResponse  } from "next/server"

connect()
export async  function POST(req:NextRequest){
    try {
        const reqBody=await req.json()
        const {userName,email,password}=reqBody
        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
        }
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(password,salt)
        const newUser=new User({
            userName,
            email,
            password:hashedPassword
        })
        await newUser.save()
        return NextResponse.json({
            message:"User created successfully",
            success:true,
            
        })
    } catch (error) {
        return NextResponse.json({error:(error as Error).message})
    }
}