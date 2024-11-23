import React from 'react';
import moment from 'moment';
export default function TimeDisplay({ updatedAt }: { updatedAt: string }) {
    const getRelativeTime = (updatedAt: string) => {
        const now = moment();
        const updatedTime = moment(updatedAt);

        // Kiểm tra xem thời gian có phải là hôm nay, hôm qua hay không
        if (updatedTime.isSame(now, 'day')) {
            return 'Hôm nay';
        } else if (updatedTime.isSame(now.subtract(1, 'day'), 'day')) {
            return 'Hôm qua';
        }

        // Kiểm tra nếu là 5, 6, 7 ngày trước
        const daysAgo = now.diff(updatedTime, 'days');
        if (daysAgo >= 5 && daysAgo <= 7) {
            return `${daysAgo} ngày trước`;
        }

        // Nếu không thuộc các trường hợp trên, trả về thời gian đầy đủ
        return updatedTime.fromNow();
    };

    return (
        <h3 className="text-lg font-bold text-gray-500">
            {getRelativeTime(updatedAt)}
        </h3>
    );
};