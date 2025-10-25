export interface Notification {
  message: string;
  severity: 'info' | 'warning' | 'error';
  timestamp: string;
  assetId: string;
  isRead: boolean;
}

export interface NotificationsTableProps {
  maxNotifications?: number;
  onEntryClick?: (assetId: string) => void;
}