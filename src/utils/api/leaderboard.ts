import { ApiLeaderboard, ApiMember, Leaderboard, Member } from '@/types/api-responces/leaderboard'

const millisecondsToTime = (milliseconds: number): string => {
    const date = new Date(milliseconds)
    return date.toISOString().substr(11, 8)
}

const getMemberData = (memeber: ApiMember): Member => {
    return {
        ...memeber,
        completion_day_level: Object.entries(memeber.completion_day_level)
            .map(([day, stars]) => {
                const diff = Boolean(stars[1] && stars[2]) ? millisecondsToTime(new Date(stars[2].get_star_ts * 1000).getTime() - new Date(stars[1].get_star_ts * 1000).getTime()) : '';

                return ({
                    day,
                    stars: Object.entries(stars)
                        .map(([task, data]) => {
                            const correctDay = day.length === 1 ? `0${day}` : day
                            const startDate = new Date(`2024-12-${correctDay}T05:00:00.000Z`)
                            const completeDate = new Date(data.get_star_ts * 1000)
                            const diff = completeDate.getTime() - startDate.getTime()
                            const diffTime = millisecondsToTime(diff)
                            return ({
                                task,
                                diffTime,
                                get_star_ts: data.get_star_ts,
                            })
                        }),
                    diff
                })
            }),
    }
}

export const deserializeApiLeaderboard = (apiLeaderboard: ApiLeaderboard): Leaderboard => {
    return {
        members: Object.values(apiLeaderboard.members)
            .map(getMemberData)
            .sort((a, b) => b.local_score - a.local_score),
    }
}
