import { FC } from 'react'
import { DayLevel } from '@/types/api-responces/leaderboard'

interface DayLevelAccordionProps {
    completionDayLevel: DayLevel[];
}

const DayLevelAccordion: FC<DayLevelAccordionProps> = ({ completionDayLevel }) => {
    return (
        <div className="bg-gray-900 text-gray-300 p-4 rounded-md shadow-md font-mono">
            <div className="grid grid-cols-4 border-b border-gray-700 pb-2 text-sm">
                <span className="col-span-1">Day</span>
                <span className="col-span-1">Task 1</span>
                <span className="col-span-1">Task 2</span>
                <span className="col-span-1">Diff</span>
            </div>

            {completionDayLevel.map((dayLevel, idx) => (
                <div className="grid grid-cols-4 border-b border-gray-700 pb-2 text-sm hover:bg-gray-800" key={idx}>
                    <div className="col-span-1">
                        {dayLevel.day}
                    </div>

                    {dayLevel.stars.map((star, starIdx) => (
                        <div
                            key={starIdx}
                            className="col-span-1 py-1 text-xs"
                        >
                            {star.diffTime}
                        </div>
                    ))}

                    <div
                        className="col-span-1 py-1 text-xs"
                    >
                        {dayLevel.diff}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DayLevelAccordion;
