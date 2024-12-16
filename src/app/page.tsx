import axios from 'axios'
import { Leaderboard } from '@/types/api-responces/leaderboard'

export const revalidate = 900

export default async function Home() {
    const post = (await axios.get<Leaderboard>('/api/get-data')).data

    console.log('MY_REG post: ', post);

    return (
        <main>
            <h1>{post.event}</h1>
            <p>{post.owner_id}</p>
        </main>
    )
}
