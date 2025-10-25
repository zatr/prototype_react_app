export interface Asset {
  id: string;
  model: string;
  serial: string;
  weight: number;
  cost: number;
  purchaseDate: string;
  status: 'Active' | 'Pending' | 'Inactive' | 'Maintenance';
  location_latitude: number;
  location_longitude: number;
}

export interface AssetTableProps {
  onAssetClick: (asset: Asset) => void;
}

export interface AssetMapProps {
  selectedAsset: Asset;
}