import { NextResponse } from 'next/server';

export async function GET(req:Request , res:Response){
    const id = req.nextUrl.pathname.split('/').pop(); // Extract the ID from the URL
 
     // Return a response
     return NextResponse.json({ message: `Blog GET response for ID: ${id}` });
    }