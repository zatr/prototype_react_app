'use client';

import { useRouter } from 'next/navigation';
import { Asset } from '../../components/AssetTable';
import { RecentData } from '../../components/RecentDataTable';

interface RecentDataDetailViewProps {
  asset: Asset;
  event: RecentData;
}

export default function RecentDataDetailView({ asset, event }: RecentDataDetailViewProps) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex grow flex-col items-center py-8 px-8 bg-white dark:bg-black sm:items-start w-full">
        {/* Header with back button */}
        <div className="w-full flex items-center mb-8">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white ml-4">Recent Data Details</h1>
        </div>

        {/* Asset Information */}
        <div className="w-full mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Asset Information</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">ID</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{asset.id}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Model</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{asset.model}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Serial</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{asset.serial}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</p>
              <span className={`mt-1 px-2 inline-flex text-sm leading-5 font-semibold rounded-full 
                ${asset.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                  asset.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                {asset.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Weight</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{asset.weight} kg</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Cost</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">${asset.cost}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Purchase Date</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{asset.purchaseDate}</p>
            </div>
          </div>
        </div>

        {/* Event Information */}
        <div className="w-full p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Event Details</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Timestamp</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{event.timestamp}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Event Type</p>
                <span className={`mt-1 px-2 inline-flex text-sm leading-5 font-semibold rounded-full 
                  ${event.eventType === 'Status Change' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                    event.eventType === 'Cost Update' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                  {event.eventType}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Details</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{event.details}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}