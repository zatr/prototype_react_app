export interface RecentData {
  timestamp: string;
  eventType: 'Status Change' | 'Cost Update' | 'Maintenance' | 'New Asset' | string;
  assetId: string;
  details: string;
}

export interface RecentDataTableProps {
  selectedAssetId: string;
}

// Utility type for event type colors
export type EventTypeColors = {
  [key in 'Status Change' | 'Cost Update' | 'Maintenance' | 'New Asset']: {
    bg: string;
    text: string;
    darkBg: string;
    darkText: string;
  };
};