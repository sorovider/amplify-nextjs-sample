import { headers } from 'next/headers'


type Props = {
    messages: string[]
}

export default async function Page() {
    /*
        APIのベースURLを取得
    */
    const headersData = headers()
    const host = headersData.get('host')
    const protocol = headersData.get('x-forwarded-proto') ?? host?.startsWith('localhost') ? 'http' : 'https' 
    const apiBase = `${protocol}://${host}`

    /*
        no-store(SSR)で現在時刻などのdata取得
    */
    const res = await fetch(`${apiBase}/hello`, { cache: "no-store"} )
    const { messages }: Props = await res.json()

    return (
        <>
            { messages.map(message => <p key={message}>{message}</p>) }
        </>
    )
}
