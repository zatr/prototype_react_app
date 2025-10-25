'use client'
import { assetData } from '../data/mockData';

import { AssetTableProps } from '../types';

export default function AssetTable({ onAssetClick }: AssetTableProps) {
  return (
    <div className="w-[230px] overflow-x-auto">
      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th scope="col" className="w-24 px-2 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-2 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {assetData.map((asset) => (
            <tr 
              key={asset.id}
              onClick={() => onAssetClick(asset)}
              className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{asset.id}</td>
              <td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${asset.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                    asset.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {asset.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}