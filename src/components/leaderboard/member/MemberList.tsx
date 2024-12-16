import { FC } from 'react'
import { Member as MemberType } from '@/types/api-responces/leaderboard'
import MemberItem from './MemberItem'

interface MemberListProps {
    members: MemberType[];
}

const MemberList: FC<MemberListProps> = ({ members }) => {
    return (
        <div className="grid grid-cols-5 gap-2 max-w-3xl m-auto">
            <div className="font-bold">ID</div>
            <div className="font-bold">Name</div>
            <div className="font-bold">Stars</div>
            <div className="font-bold col-span-2">Local Score</div>
            {members.map((member, index) => (
                <MemberItem key={member.id} member={member} index={index} />
            ))}
        </div>
    )
}

export default MemberList
