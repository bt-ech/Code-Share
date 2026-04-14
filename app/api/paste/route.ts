import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Paste from "@/models/paste";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request) {

  try {
     const {getUser} = await getKindeServerSession();
    const user = await getUser();

    await dbConnect(); // connect to DB

    const body = await req.json();
    const { code, category, language, expiry , pasteName} = body;

    // Basic validation
    if (!code || !category || !language || !expiry || !pasteName) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const params = new URLSearchParams();

    const api_key = process.env.api_dev_key;

    params.append("api_dev_key" , api_key!);
    params.append("api_paste_name" , pasteName);
    params.append("api_option", "paste");
    params.append("api_paste_code", code);
    params.append("api_paste_name", category);
    params.append("api_paste_format", language);
    params.append("api_paste_expire_date", expiry);
    params.append("api_paste_private", "1"); // 0=public, 1=unlisted, 2=private

    const response = await fetch(
      "https://pastebin.com/api/api_post.php",
      {
        method: "POST",
        body: params,
      }
    );

    const result = await response.text();

    if (!response.ok || result.includes("Bad API request")) {
      return NextResponse.json(
        { success: false, message: result },
        { status: 400 }
      );
    }

    // Create new paste if api call is successfull
    const newPaste = await Paste.create({
      name_of_paste: pasteName,
      owner_id: user?.id,
      owner_email: user?.email,
      owner_name: user?.given_name, 
      category : category,        // or whatever you want
      type_of_file: language,
      code: code,
      expiry: expiry,
      paste_url: result,
    });

    return NextResponse.json( // NextResponse is a middleware
      {
        success: true,
        message: "Paste created successfully",
        pasteUrl: result,
        data: newPaste,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating paste:", error);

    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try{
    await dbConnect();

    const pastes = await Paste.find({})
    .sort({createdAt: -1})
    .select("owner_name name_of_paste")
    .limit(5);

    return NextResponse.json({
      success: true,
      data: pastes,
    })
  } catch {
    return NextResponse.json({
      success: false , message: "Failed to fetch pastes"},
      {status: 500}
    );
  }
}