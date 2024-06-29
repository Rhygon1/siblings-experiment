import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
    const filePath = path.join(process.cwd(), 'public/all_responses.json');

    let rawData = '';
    rawData = await fs.readFile(filePath, 'utf8');

    let list = [];
    try {
        list = JSON.parse(rawData);
    } catch (err) {
        return NextResponse.json({ res: "not ok" });
    }

    let responses;
    try{
        responses = await request.json();
    } catch (err) {
        NextResponse.json({ res: "not ok" });
    }

    if (!Array.isArray(responses) || responses.length != 11 || !Number.isInteger(responses[10]) || responses[10] > 3) {
        return NextResponse.json({ res: "not ok" })
    }

    list.push(responses);
    await fs.writeFile(filePath, JSON.stringify(list), 'utf8');

    let averages = {
        0: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    let counts = [0, 0, 0, 0];

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < 11; j++) {
            averages[list[i][10]][j] += list[i][j]
        }
        counts[list[i][10]]++
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 11; j++) {
            averages[i][j] = averages[i][j]/counts[i]
        }
    }

    await fs.writeFile(path.join(process.cwd(), 'public/averages.json'), JSON.stringify(averages), 'utf8');

    return NextResponse.json(averages);
}