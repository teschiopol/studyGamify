"use client";

function getDayDiff(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;

    return Math.round(
        Math.abs(Number(endDate) - Number(startDate)) / msInDay
    );
}

function calculateLeft() {

    return getDayDiff(
        new Date(),
        new Date('2024-02-06')
    );
}

const DayLeft = () => {
    return (
        <div className="w-full bg-gray-300">
            <div
                className={`bg-blue-500 p-0.5 text-center text-xs font-medium leading-none text-primary-100 w-1/5`}
                >
                { calculateLeft() } Days Left
            </div>
        </div>
    );
  };

export default DayLeft;
