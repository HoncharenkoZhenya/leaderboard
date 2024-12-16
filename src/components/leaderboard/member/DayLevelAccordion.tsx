import { FC } from 'react'
import { DayLevel } from '@/types/api-responces/leaderboard'

interface DayLevelAccordionProps {
    completionDayLevel: DayLevel[];
}

const DayLevelAccordion: FC<DayLevelAccordionProps> = ({ completionDayLevel }) => {
    return (
        <div className="bg-gray-900 text-gray-300 p-4 rounded-md shadow-md font-mono">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-gray-700 pb-2 text-sm">
                <span className="col-span-1 text-left">Day</span>
                <span className="col-span-1 text-center">Task</span>
                <span className="col-span-2 text-center">Completion Time</span>
            </div>

            {/* Table Body */}
            {completionDayLevel.map((dayLevel, idx) => (
                <div key={idx} className="border-b border-gray-800 last:border-none">
                    {/* Day Row */}
                    <div className="grid grid-cols-4 py-2 text-xs font-bold bg-gray-800">
                        <span className="col-span-1">{dayLevel.day}</span>
                        <span className="col-span-3"></span>
                    </div>

                    {/* Stars / Tasks */}
                    {dayLevel.stars.map((star, starIdx) => (
                        <div
                            key={starIdx}
                            className="grid grid-cols-4 py-1 text-xs hover:bg-gray-800"
                        >
                            <span className="col-span-1"></span>
                            <span className="col-span-1 text-center">{star.task}</span>
                            <span className="col-span-2 text-center">{star.diffTime}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DayLevelAccordion;
