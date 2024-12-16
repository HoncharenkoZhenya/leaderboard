export interface ApiLeaderboard {
    owner_id: number;
    day1_ts: number;
    event: string;
    members: { [key: string]: ApiMember };
}

export interface ApiMember {
    global_score: number;
    completion_day_level: { [key: string]: ApiDayLevel };
    local_score: number;
    last_star_ts: number;
    id: number;
    stars: number;
    name: string;
}

export interface ApiDayLevel {
    [key: string]: ApiStar;
}

export interface ApiStar {
    get_star_ts: number;
    star_index: number;
}

export interface Leaderboard {
    members: Member[];
}

export interface Member {
    completion_day_level: DayLevel[];
    local_score: number;
    id: number;
    stars: number;
    name: string;
}

export interface DayLevel {
    day: string;
    stars: Star[];
}

export interface Star {
    task: string;
    diffTime: string;
}
