import axios from 'axios'
import { ApiLeaderboard } from '@/types/api-responces/leaderboard'
import { deserializeApiLeaderboard } from '@/utils/api/leaderboard';
import MemberList from '@/components/leaderboard/member/MemberList';

export const revalidate = 900

export default async function Home() {
    const apiData = (await axios.get<ApiLeaderboard>(`${process.env.API_DOMAIN}/api/get-data`)).data;

    const leaderboard = deserializeApiLeaderboard(apiData);

    return (
        <main>
            <h1 className="text-4xl font-bold text-center my-8">Genesis Advent of Code Leaderboard</h1>

            <MemberList members={leaderboard.members} />
        </main>
    )
}
