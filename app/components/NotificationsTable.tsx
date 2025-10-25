'use client'

import { notificationData } from '../data/mockData';
import { NotificationsTableProps } from '../types';

export default function NotificationsTable({ onEntryClick }: NotificationsTableProps) {
  return (
    <div className="w-full overflow-x-auto h-[350px]">
      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800 sticky top-0 z-10">
          <tr>
            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Timestamp</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Severity</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Asset ID</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Message</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {notificationData.map((notification) => (
            <tr 
              key={`${notification.timestamp}-${notification.assetId}`}
              className={`${onEntryClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors' : ''} ${
                !notification.isRead ? 'bg-blue-50 dark:bg-blue-900/20' : ''
              }`}
              onClick={() => onEntryClick?.(notification.assetId)}
            >
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{notification.timestamp}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${notification.severity === 'error' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 
                    notification.severity === 'warning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'}`}>
                  {notification.severity.toUpperCase()}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{notification.assetId}</td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">{notification.message}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                <span className={`inline-flex items-center text-xs ${
                  notification.isRead ? 'text-gray-500 dark:text-gray-400' : 'text-blue-600 dark:text-blue-400 font-semibold'
                }`}>
                  {notification.isRead ? 'Read' : 'Unread'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}