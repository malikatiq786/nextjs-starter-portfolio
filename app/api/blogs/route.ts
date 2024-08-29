import { NextResponse } from 'next/server';

export async function GET(req:Request , res:Response){ 
     // Return a response
     return NextResponse.json({ message: "Blog GET function response" });
}

export async function POST(req:Request , res:Response){ 
    // Return a response
    return NextResponse.json({ message: "Blog POST function response" });
}