
import { NextResponse, NextRequest } from 'next/server';

type ResponseData = {
  message: string;
};


export async function GET(){


  const x ="hallo"

  return NextResponse.json({
    hello : "data"
  })
}