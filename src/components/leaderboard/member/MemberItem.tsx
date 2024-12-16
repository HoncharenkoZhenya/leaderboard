'use client'

import { FC, useState } from 'react'
import { Member as MemberType } from '@/types/api-responces/leaderboard'
import DayLevelAccordion from './DayLevelAccordion'

interface MemberItemProps {
    member: MemberType;
    index: number;
}

const MemberItem: FC<MemberItemProps> = ({ member, index }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={`col-span-5 grid grid-cols-5 gap-2 p-4 border border-gray-300 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700'}`}>
                <div>{member.id}</div>
                <div>{member.name}</div>
                <div>{member.stars}</div>
                <div>{member.local_score}</div>
                <div>
                    <button
                        className="text-blue-500"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Hide' : 'Show'} Details
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="col-span-5 p-4 border border-gray-300">
                    <DayLevelAccordion completionDayLevel={member.completion_day_level} />
                </div>
            )}
        </>
    )
}

export default MemberItem
