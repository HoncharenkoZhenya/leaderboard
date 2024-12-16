export interface Leaderboard {
    owner_id: number;
    day1_ts: number;
    event: string;
    members: { [key: string]: Member };
}

export interface Member {
    global_score: number;
    completion_day_level: { [key: string]: DayLevel };
    local_score: number;
    last_star_ts: number;
    id: number;
    stars: number;
    name: string;
}

export interface DayLevel {
    [key: string]: Star;
}

export interface Star {
    get_star_ts: number;
    star_index: number;
}
