import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
    const QUESTIONS = 12;
    const filePath = path.join(process.cwd(), 'public/all_responses.json');

    let rawData = '';
    rawData = await fs.readFile(filePath, 'utf8');

    let list = [];
    try {
        list = JSON.parse(rawData);
    } catch (err) {
        list = [];
    }

    let responses;
    try {
        let res = await request.json();
        responses = res.responses
    } catch (err) {
        NextResponse.json({ res: "not ok2" });
    }

    if (!Array.isArray(responses) || responses.length != QUESTIONS || !Number.isInteger(responses[10]) || responses[QUESTIONS - 1] > 3) {
        return NextResponse.json({ res: "not ok3" })
    }

    list.push(responses);
    await fs.writeFile(filePath, JSON.stringify(list), 'utf8');

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

    await fs.writeFile(path.join(process.cwd(), 'public/averages.json'), JSON.stringify(averages), 'utf8');

    return NextResponse.json(averages);
}