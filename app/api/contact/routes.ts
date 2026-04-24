import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Log the data to the terminal
        console.log("DATA:", body);

        return NextResponse.json(
            { success: true, message: "Thank you! We will get back to you shortly." },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to submit enquiry." },
            { status: 500 }
        );
    }
}