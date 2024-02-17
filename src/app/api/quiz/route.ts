import Diagnosis from "@/models/Diagnosis";
import { connect } from "@/utils/db";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  // 建立数据库连接
  await connect();
  // 生成数据
  const data = await req.json();
  try {
    // 存入数据
    console.log("1", 1);
    console.log("data", data);
    await Diagnosis.create({
      ...data,
      _id: data._id || new Types.ObjectId(),
    });
    // 返回结果
    return new NextResponse("ok", { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new NextResponse("failed", { status: 400 });
  }
};
