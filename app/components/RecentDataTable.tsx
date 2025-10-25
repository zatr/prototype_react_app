'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { recentData } from '../data/mockData';

import { RecentData, RecentDataTableProps } from '../types';

export default function RecentDataTable({ selectedAssetId }: RecentDataTableProps) {
  const router = useRouter();
  const filteredData = selectedAssetId === '--' ? [] : recentData.filter(entry => entry.assetId === selectedAssetId);
  return (
    <div className="w-full h-[250px] overflow-x-auto overflow-y-auto relative">
      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800 sticky top-0 z-10">
          <tr>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">Timestamp</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">Event Type</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-800">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={3} className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                {selectedAssetId === '--' ? 'Select an asset to view recent data' : 'No recent data available for this asset'}
              </td>
            </tr>
          ) : (
            filteredData.map((entry: RecentData) => (
            <tr 
              key={`${entry.timestamp}-${entry.assetId}`}
              className="group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                <Link href={`/recent-data/${entry.assetId}`} className="block hover:underline">
                  {entry.timestamp}
                </Link>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm">
                <Link href={`/recent-data/${entry.assetId}`} className="block">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${entry.eventType === 'Status Change' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                      entry.eventType === 'Cost Update' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      entry.eventType === 'Maintenance' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      entry.eventType === 'New Asset' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'}`}>
                    {entry.eventType}
                  </span>
                </Link>
              </td>
              <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
                <Link href={`/recent-data/${entry.assetId}`} className="block hover:underline">
                  {entry.details}
                </Link>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}