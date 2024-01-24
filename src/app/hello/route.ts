import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        messages: [
            'test',
            'これはダミーデータです',
            '/helloというエンドポイントをサンプルとして作成',
            `現在時刻: ${(new Date()).toISOString()}`
        ]
    })
}