'use client';

import AssetTable from './components/AssetTable';
import RecentDataTable from './components/RecentDataTable';
import NotificationsTable from './components/NotificationsTable';
import AssetMap from './components/AssetMap';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Asset } from './types';
import { assetData, recentData } from './data/mockData';
import MenuBar from './components/MenuBar';

const defaultAsset: Asset = {
  id: '--',
  model: '--',
  serial: '--',
  weight: 0,
  cost: 0,
  purchaseDate: '--',
  status: 'Inactive',
  location_latitude: 39.8283, // Center of US
  location_longitude: -98.5795
};

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedAsset, setSelectedAsset] = useState<Asset>(defaultAsset);

  // Initialize selected asset from URL on page load
  useEffect(() => {
    const assetId = searchParams.get('asset');
    if (assetId) {
      const asset = assetData.find(a => a.id === assetId);
      if (asset) {
        setSelectedAsset(asset);
      }
    }
  }, [searchParams]);

  // Update URL when asset is selected
  const handleAssetSelect = (asset: Asset) => {
    setSelectedAsset(asset);
    const params = new URLSearchParams(searchParams);
    if (asset.id === '--') {
      params.delete('asset');
    } else {
      params.set('asset', asset.id);
    }
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      {/* Menu Bar */}
      <MenuBar />
      
      {/* Main Content */}
      <main className="flex grow flex-col items-center py-2 px-2 bg-white dark:bg-black sm:items-start w-full overflow-y-auto">
        {/* Row 1 */}
        <div className="w-full mb-2 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Status</h2>
          <div className="grid grid-cols-7 gap-4">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">ID</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{selectedAsset.id}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Model</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{selectedAsset.model}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Serial</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{selectedAsset.serial}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Weight (kg)</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{selectedAsset.weight}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Cost ($)</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{selectedAsset.cost}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Purchase Date</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{selectedAsset.purchaseDate}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</p>
              <p className="text-lg font-semibold mt-1">
                <span className={`px-2 inline-flex leading-5 rounded-full 
                  ${selectedAsset.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                    selectedAsset.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {selectedAsset.status}
                </span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="w-full mb-2 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Data</h2>
          <RecentDataTable selectedAssetId={selectedAsset.id} />
        </div>
        
        {/* Row 3 */}
        <div className="w-full p-2 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Notifications</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1 bg-white dark:bg-gray-800 p-2 rounded-lg">
              <NotificationsTable />
            </div>
            <div className="col-span-1 bg-white dark:bg-gray-800 p-2 rounded-lg">
              <AssetMap selectedAsset={selectedAsset} />
            </div>
          </div>
        </div>
      </main>

      {/* Right Column - Asset Table Frame */}
      <div className="w-[280px] h-full bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden shrink-0">
        <div className="h-full p-4 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Asset Data</h2>
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
              <AssetTable onAssetClick={handleAssetSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
