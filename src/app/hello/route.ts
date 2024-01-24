import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch('https://meigen.doodlenote.net/api/json.php', { cache: "no-store" })
    const [ data ] = await res.json()

    return NextResponse.json({
        messages: [
            'test',
            'これはダミーデータです',
            '/helloというエンドポイントをサンプルとして作成',
            `現在時刻: ${(new Date()).toISOString()}`,
            data.meigen
        ]
    })
}