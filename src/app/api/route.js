import { NextResponse } from "next/server";
import connectDB from '../../lib/connectDB';
import Response from "@/models/response";

export async function POST(request) {
    await connectDB();
    const QUESTIONS = 12;

    let responses;
    try {
        let res = await request.json();
        responses = res.responses
    } catch (err) {
        NextResponse.json({ res: "not ok1" });
    }

    if (!Array.isArray(responses) || responses.length != QUESTIONS || !Number.isInteger(responses[10]) || responses[QUESTIONS - 1] > 3) {
        return NextResponse.json({ res: "not ok2" })
    }

    const newResponse = new Response({response: responses})
    let r = await newResponse.save()
    console.log(r)

    return NextResponse.json(r);
}

export async function GET(_){
    await connectDB();
    const QUESTIONS = 12;
    
    let list = await Response.find({});
    list = list.map(l => l.response)

    let averages = {
        0: new Array(QUESTIONS).fill(0),
        1: new Array(QUESTIONS).fill(0),
        2: new Array(QUESTIONS).fill(0),
        3: new Array(QUESTIONS).fill(0)
    }

    let counts = [0, 0, 0, 0];

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < QUESTIONS; j++) {
            averages[list[i][QUESTIONS - 1]][j] += list[i][j]
        }
        counts[list[i][QUESTIONS - 1]]++
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < QUESTIONS; j++) {
            averages[i][j] = (counts[i] == 0 ? averages[i][j] : averages[i][j] / counts[i])
        }
    }

    return NextResponse.json(averages);
}