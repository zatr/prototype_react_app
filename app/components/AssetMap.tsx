'use client';

import { useEffect, useRef } from 'react';
import { AssetMapProps } from '../types';

export default function AssetMap({ selectedAsset }: AssetMapProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!selectedAsset?.location_latitude || !selectedAsset?.location_longitude) return;

    // Create the marker URL for OpenStreetMap
    const markerUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${selectedAsset.location_longitude - 1}%2C${selectedAsset.location_latitude - 1}%2C${selectedAsset.location_longitude + 1}%2C${selectedAsset.location_latitude + 1}&layer=mapnik&marker=${selectedAsset.location_latitude}%2C${selectedAsset.location_longitude}`;

    if (iframeRef.current) {
      iframeRef.current.src = markerUrl;
    }
  }, [selectedAsset]);

  const centerLat = selectedAsset?.location_latitude || 39.8283;
  const centerLong = selectedAsset?.location_longitude || -98.5795;
  const defaultUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${centerLong - 30}%2C${centerLat - 15}%2C${centerLong + 30}%2C${centerLat + 15}&layer=mapnik`;

  return (
    <div className="h-full">
      <div className="relative h-[350px]">
        <iframe
          ref={iframeRef}
          className="w-full h-full rounded-lg"
          src={defaultUrl}
          style={{ border: '1px solid rgb(209 213 219)' }}
        ></iframe>
      </div>
      {selectedAsset?.location_latitude && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <a
            href={`https://www.openstreetmap.org/?mlat=${selectedAsset.location_latitude}&mlon=${selectedAsset.location_longitude}#map=10/${selectedAsset.location_latitude}/${selectedAsset.location_longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            View Larger Map
          </a>
        </div>
      )}
    </div>
  );
}