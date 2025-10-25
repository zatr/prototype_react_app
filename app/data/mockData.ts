import { Asset, Notification, RecentData } from '../types';

export const assetData: Asset[] = [
  // Kansas City, MO
  { id: 'LMNO2241', model: 'A100', serial: 'SN100001', weight: 25.5, cost: 1299.99, status: 'Active', purchaseDate: '2024-01-15', location_latitude: 39.0997, location_longitude: -94.5786 },
  // Chicago, IL
  { id: 'LMNO2245', model: 'A100', serial: 'SN100002', weight: 25.5, cost: 1299.99, status: 'Active', purchaseDate: '2024-01-18', location_latitude: 41.8781, location_longitude: -87.6298 },
  // Minneapolis, MN
  { id: 'LMNO2349', model: 'A100', serial: 'SN100003', weight: 25.5, cost: 1299.99, status: 'Pending', purchaseDate: '2024-02-01', location_latitude: 44.9778, location_longitude: -93.2650 },
  // Seattle, WA
  { id: 'LMNO3445', model: 'B200', serial: 'SN200001', weight: 30.2, cost: 1599.99, status: 'Active', purchaseDate: '2024-03-10', location_latitude: 47.6062, location_longitude: -122.3321 },
  // Portland, OR
  { id: 'LMNO3447', model: 'B200', serial: 'SN200002', weight: 30.2, cost: 1599.99, status: 'Maintenance', purchaseDate: '2024-03-12', location_latitude: 45.5155, location_longitude: -122.6789 },
  // San Francisco, CA
  { id: 'LMNO3448', model: 'B200', serial: 'SN200003', weight: 30.2, cost: 1599.99, status: 'Active', purchaseDate: '2024-03-15', location_latitude: 37.7749, location_longitude: -122.4194 },
  // Los Angeles, CA
  { id: 'LMNO3449', model: 'B200', serial: 'SN200004', weight: 30.2, cost: 1599.99, status: 'Active', purchaseDate: '2024-03-18', location_latitude: 34.0522, location_longitude: -118.2437 },
  // San Diego, CA
  { id: 'LMNO3450', model: 'B200', serial: 'SN200005', weight: 30.2, cost: 1599.99, status: 'Active', purchaseDate: '2024-03-20', location_latitude: 32.7157, location_longitude: -117.1611 },
  // Phoenix, AZ
  { id: 'LMNO3451', model: 'C300', serial: 'SN300001', weight: 15.8, cost: 899.99, status: 'Active', purchaseDate: '2024-04-05', location_latitude: 33.4484, location_longitude: -112.0740 },
  // Denver, CO
  { id: 'LMNO3452', model: 'C300', serial: 'SN300002', weight: 15.8, cost: 899.99, status: 'Pending', purchaseDate: '2024-04-08', location_latitude: 39.7392, location_longitude: -104.9903 },
  // Salt Lake City, UT
  { id: 'LMNO3453', model: 'C300', serial: 'SN300003', weight: 15.8, cost: 899.99, status: 'Active', purchaseDate: '2024-04-10', location_latitude: 40.7608, location_longitude: -111.8910 },
  // Dallas, TX
  { id: 'LMNO3454', model: 'C300', serial: 'SN300004', weight: 15.8, cost: 899.99, status: 'Active', purchaseDate: '2024-04-12', location_latitude: 32.7767, location_longitude: -96.7970 },
  // Houston, TX
  { id: 'LMNO3455', model: 'C300', serial: 'SN300005', weight: 15.8, cost: 899.99, status: 'Active', purchaseDate: '2024-04-15', location_latitude: 29.7604, location_longitude: -95.3698 },
  // New Orleans, LA
  { id: 'LMNO3456', model: 'D400', serial: 'SN400001', weight: 22.4, cost: 1199.99, status: 'Active', purchaseDate: '2024-05-02', location_latitude: 29.9511, location_longitude: -90.0715 },
  // Miami, FL
  { id: 'LMNO3457', model: 'D400', serial: 'SN400002', weight: 22.4, cost: 1199.99, status: 'Pending', purchaseDate: '2024-05-05', location_latitude: 25.7617, location_longitude: -80.1918 },
  // Orlando, FL
  { id: 'LMNO3458', model: 'D400', serial: 'SN400003', weight: 22.4, cost: 1199.99, status: 'Active', purchaseDate: '2024-05-08', location_latitude: 28.5383, location_longitude: -81.3792 },
  // Atlanta, GA
  { id: 'LMNO3459', model: 'D400', serial: 'SN400004', weight: 22.4, cost: 1199.99, status: 'Maintenance', purchaseDate: '2024-05-10', location_latitude: 33.7490, location_longitude: -84.3880 },
  // Charlotte, NC
  { id: 'LMNO3460', model: 'D400', serial: 'SN400005', weight: 22.4, cost: 1199.99, status: 'Active', purchaseDate: '2024-05-12', location_latitude: 35.2271, location_longitude: -80.8431 },
  // Washington, DC
  { id: 'LMNO3461', model: 'E500', serial: 'SN500001', weight: 18.6, cost: 1099.99, status: 'Maintenance', purchaseDate: '2024-06-01', location_latitude: 38.9072, location_longitude: -77.0369 },
  // Philadelphia, PA
  { id: 'LMNO3462', model: 'E500', serial: 'SN500002', weight: 18.6, cost: 1099.99, status: 'Active', purchaseDate: '2024-06-03', location_latitude: 39.9526, location_longitude: -75.1652 },
  // New York, NY
  { id: 'LMNO3463', model: 'E500', serial: 'SN500003', weight: 18.6, cost: 1099.99, status: 'Active', purchaseDate: '2024-06-05', location_latitude: 40.7128, location_longitude: -74.0060 },
  // Boston, MA
  { id: 'LMNO3464', model: 'E500', serial: 'SN500004', weight: 18.6, cost: 1099.99, status: 'Active', purchaseDate: '2024-06-08', location_latitude: 42.3601, location_longitude: -71.0589 },
  // Pittsburgh, PA
  { id: 'LMNO3465', model: 'E500', serial: 'SN500005', weight: 18.6, cost: 1099.99, status: 'Active', purchaseDate: '2024-06-10', location_latitude: 40.4406, location_longitude: -79.9959 },
  // Detroit, MI
  { id: 'LMNO3466', model: 'F600', serial: 'SN600001', weight: 28.1, cost: 1499.99, status: 'Pending', purchaseDate: '2024-07-01', location_latitude: 42.3314, location_longitude: -83.0458 },
  // Cleveland, OH
  { id: 'LMNO3467', model: 'F600', serial: 'SN600002', weight: 28.1, cost: 1499.99, status: 'Maintenance', purchaseDate: '2024-07-03', location_latitude: 41.4993, location_longitude: -81.6944 },
  // Cincinnati, OH
  { id: 'LMNO3468', model: 'F600', serial: 'SN600003', weight: 28.1, cost: 1499.99, status: 'Pending', purchaseDate: '2024-07-05', location_latitude: 39.1031, location_longitude: -84.5120 },
  // Indianapolis, IN
  { id: 'LMNO3469', model: 'F600', serial: 'SN600004', weight: 28.1, cost: 1499.99, status: 'Maintenance', purchaseDate: '2024-07-08', location_latitude: 39.7684, location_longitude: -86.1581 },
  // Milwaukee, WI
  { id: 'LMNO3470', model: 'F600', serial: 'SN600005', weight: 28.1, cost: 1499.99, status: 'Active', purchaseDate: '2024-07-10', location_latitude: 43.0389, location_longitude: -87.9065 },
];

export const recentData: RecentData[] = [
  // LMNO2241 - A100
  { timestamp: '2025-10-23 09:45:22', eventType: 'Status Change', assetId: 'LMNO2241', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 15:30:15', eventType: 'Maintenance', assetId: 'LMNO2241', details: 'Routine inspection completed' },
  { timestamp: '2025-10-21 11:15:03', eventType: 'Location Change', assetId: 'LMNO2241', details: 'Moved to Production Floor A' },
  { timestamp: '2025-10-20 14:20:00', eventType: 'Cost Update', assetId: 'LMNO2241', details: 'Maintenance cost added: $150.00' },
  { timestamp: '2025-10-19 09:45:30', eventType: 'Status Change', assetId: 'LMNO2241', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-18 16:30:00', eventType: 'Performance Check', assetId: 'LMNO2241', details: 'Performance within normal range' },
  { timestamp: '2025-10-17 13:15:45', eventType: 'Location Change', assetId: 'LMNO2241', details: 'Moved to Maintenance Bay' },
  { timestamp: '2025-10-16 10:00:00', eventType: 'Status Change', assetId: 'LMNO2241', details: 'Status changed to Active' },
  { timestamp: '2025-10-15 08:45:22', eventType: 'Calibration', assetId: 'LMNO2241', details: 'Annual calibration completed' },
  { timestamp: '2025-10-14 14:30:15', eventType: 'Cost Update', assetId: 'LMNO2241', details: 'Insurance renewal: $200.00' },

  // LMNO2245 - A100
  { timestamp: '2025-10-23 09:40:00', eventType: 'Maintenance', assetId: 'LMNO2245', details: 'Filter replacement completed' },
  { timestamp: '2025-10-22 13:25:15', eventType: 'Status Change', assetId: 'LMNO2245', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-21 10:15:03', eventType: 'Performance Check', assetId: 'LMNO2245', details: 'Efficiency at 95%' },
  { timestamp: '2025-10-20 15:20:00', eventType: 'Location Change', assetId: 'LMNO2245', details: 'Moved to Production Floor B' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Cost Update', assetId: 'LMNO2245', details: 'Parts replacement: $175.50' },
  { timestamp: '2025-10-18 14:30:00', eventType: 'Status Change', assetId: 'LMNO2245', details: 'Status changed to Active' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Calibration', assetId: 'LMNO2245', details: 'Quarterly calibration check' },
  { timestamp: '2025-10-16 16:00:00', eventType: 'Location Change', assetId: 'LMNO2245', details: 'Moved to Testing Area' },
  { timestamp: '2025-10-15 13:45:22', eventType: 'Performance Check', assetId: 'LMNO2245', details: 'Load test completed' },
  { timestamp: '2025-10-14 10:30:15', eventType: 'Maintenance', assetId: 'LMNO2245', details: 'Scheduled maintenance completed' },

  // LMNO2349 - A100
  { timestamp: '2025-10-23 09:35:00', eventType: 'Status Change', assetId: 'LMNO2349', details: 'Status changed to Pending' },
  { timestamp: '2025-10-22 14:20:15', eventType: 'Performance Check', assetId: 'LMNO2349', details: 'Performance below threshold' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO2349', details: 'Moved to Inspection Area' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Cost Update', assetId: 'LMNO2349', details: 'Repair estimate: $320.00' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Maintenance', assetId: 'LMNO2349', details: 'Maintenance request submitted' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Status Change', assetId: 'LMNO2349', details: 'Status changed to Active' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Calibration', assetId: 'LMNO2349', details: 'Calibration failed' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Location Change', assetId: 'LMNO2349', details: 'Moved to Production Floor A' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Performance Check', assetId: 'LMNO2349', details: 'Efficiency at 82%' },
  { timestamp: '2025-10-14 08:30:15', eventType: 'Status Change', assetId: 'LMNO2349', details: 'Status changed to Active' },

  // LMNO3445 - B200
  { timestamp: '2025-10-23 09:30:00', eventType: 'Performance Check', assetId: 'LMNO3445', details: 'Performance optimized' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Maintenance', assetId: 'LMNO3445', details: 'Software update completed' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Location Change', assetId: 'LMNO3445', details: 'Moved to Production Floor C' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3445', details: 'Update cost: $250.00' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Status Change', assetId: 'LMNO3445', details: 'Status changed to Active' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3445', details: 'System recalibrated' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Performance Check', assetId: 'LMNO3445', details: 'Performance test passed' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Location Change', assetId: 'LMNO3445', details: 'Moved to Testing Lab' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Status Change', assetId: 'LMNO3445', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3445', details: 'Regular maintenance started' },

  // LMNO3447 - B200
  { timestamp: '2025-10-23 09:25:00', eventType: 'Status Change', assetId: 'LMNO3447', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Performance Check', assetId: 'LMNO3447', details: 'Performance degraded' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3447', details: 'Moved to Repair Shop' },
  { timestamp: '2025-10-20 13:15:00', eventType: 'Cost Update', assetId: 'LMNO3447', details: 'Repair estimate: $450.00' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Maintenance', assetId: 'LMNO3447', details: 'Component replacement needed' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Status Change', assetId: 'LMNO3447', details: 'Status changed to Active' },
  { timestamp: '2025-10-17 11:15:45', eventType: 'Calibration', assetId: 'LMNO3447', details: 'Calibration check failed' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3447', details: 'Efficiency at 75%' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Location Change', assetId: 'LMNO3447', details: 'Moved to Testing Area' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Status Change', assetId: 'LMNO3447', details: 'Status changed to Active' },

  // LMNO3448 - B200
  { timestamp: '2025-10-23 09:20:00', eventType: 'Performance Check', assetId: 'LMNO3448', details: 'Performance optimal' },
  { timestamp: '2025-10-22 13:15:15', eventType: 'Maintenance', assetId: 'LMNO3448', details: 'Preventive maintenance completed' },
  { timestamp: '2025-10-21 10:10:03', eventType: 'Location Change', assetId: 'LMNO3448', details: 'Moved to Production Floor D' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3448', details: 'Maintenance cost: $180.00' },
  { timestamp: '2025-10-19 09:45:30', eventType: 'Status Change', assetId: 'LMNO3448', details: 'Status changed to Active' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3448', details: 'Calibration successful' },
  { timestamp: '2025-10-17 11:15:45', eventType: 'Performance Check', assetId: 'LMNO3448', details: 'Efficiency at 98%' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Location Change', assetId: 'LMNO3448', details: 'Moved to Quality Control' },
  { timestamp: '2025-10-15 10:45:22', eventType: 'Status Change', assetId: 'LMNO3448', details: 'Status changed to Testing' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3448', details: 'System check completed' },

  // LMNO3449 - B200
  { timestamp: '2025-10-23 09:15:00', eventType: 'Status Change', assetId: 'LMNO3449', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Performance Check', assetId: 'LMNO3449', details: 'Performance review completed' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3449', details: 'Moved to Production Floor E' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Maintenance', assetId: 'LMNO3449', details: 'Regular maintenance completed' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Cost Update', assetId: 'LMNO3449', details: 'Operating cost update: $220.00' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Calibration', assetId: 'LMNO3449', details: 'Calibration check passed' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Status Change', assetId: 'LMNO3449', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3449', details: 'Efficiency at 96%' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Location Change', assetId: 'LMNO3449', details: 'Moved to Testing Bay' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3449', details: 'Firmware update completed' },

  // LMNO3450 - B200
  { timestamp: '2025-10-23 09:10:00', eventType: 'Performance Check', assetId: 'LMNO3450', details: 'Performance metrics collected' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Maintenance', assetId: 'LMNO3450', details: 'Scheduled maintenance completed' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Location Change', assetId: 'LMNO3450', details: 'Moved to Assembly Line A' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Status Change', assetId: 'LMNO3450', details: 'Status changed to Active' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Cost Update', assetId: 'LMNO3450', details: 'Maintenance cost: $195.00' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3450', details: 'System calibrated' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Performance Check', assetId: 'LMNO3450', details: 'Efficiency at 97%' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Location Change', assetId: 'LMNO3450', details: 'Moved to Quality Check' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Status Change', assetId: 'LMNO3450', details: 'Status changed to Testing' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3450', details: 'Preventive check completed' },

  // LMNO3451 - C300
  { timestamp: '2025-10-23 09:05:00', eventType: 'Status Change', assetId: 'LMNO3451', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Performance Check', assetId: 'LMNO3451', details: 'Performance test passed' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3451', details: 'Moved to Production Line C' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Maintenance', assetId: 'LMNO3451', details: 'Routine maintenance completed' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Cost Update', assetId: 'LMNO3451', details: 'Service cost: $125.00' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Calibration', assetId: 'LMNO3451', details: 'Calibration verified' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Status Change', assetId: 'LMNO3451', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3451', details: 'Efficiency at 94%' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Location Change', assetId: 'LMNO3451', details: 'Moved to Assembly Area' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3451', details: 'System optimization completed' },

  // LMNO3452 - C300
  { timestamp: '2025-10-23 09:00:00', eventType: 'Cost Update', assetId: 'LMNO3452', details: 'Cost updated to $950.99' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Status Change', assetId: 'LMNO3452', details: 'Status changed to Pending' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Location Change', assetId: 'LMNO3452', details: 'Moved to Inspection Bay' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Performance Check', assetId: 'LMNO3452', details: 'Performance below threshold' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Maintenance', assetId: 'LMNO3452', details: 'Maintenance assessment scheduled' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Status Change', assetId: 'LMNO3452', details: 'Status changed to Active' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Calibration', assetId: 'LMNO3452', details: 'Calibration adjustment needed' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Location Change', assetId: 'LMNO3452', details: 'Moved to Production Line D' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Cost Update', assetId: 'LMNO3452', details: 'Maintenance budget allocated' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Performance Check', assetId: 'LMNO3452', details: 'Efficiency at 85%' },

  // LMNO3453 - C300
  { timestamp: '2025-10-23 08:55:00', eventType: 'Status Change', assetId: 'LMNO3453', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Performance Check', assetId: 'LMNO3453', details: 'Performance validated' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3453', details: 'Moved to Production Line E' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Maintenance', assetId: 'LMNO3453', details: 'Regular check completed' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Cost Update', assetId: 'LMNO3453', details: 'Operational cost: $145.00' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Calibration', assetId: 'LMNO3453', details: 'System calibrated' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Status Change', assetId: 'LMNO3453', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3453', details: 'Efficiency at 93%' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Location Change', assetId: 'LMNO3453', details: 'Moved to Testing Area' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3453', details: 'Preventive maintenance completed' },

  // LMNO3454 - C300
  { timestamp: '2025-10-23 08:50:00', eventType: 'Performance Check', assetId: 'LMNO3454', details: 'Performance verification complete' },
  { timestamp: '2025-10-22 13:15:15', eventType: 'Maintenance', assetId: 'LMNO3454', details: 'System update completed' },
  { timestamp: '2025-10-21 10:10:03', eventType: 'Location Change', assetId: 'LMNO3454', details: 'Moved to Station F' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Status Change', assetId: 'LMNO3454', details: 'Status changed to Active' },
  { timestamp: '2025-10-19 09:45:30', eventType: 'Cost Update', assetId: 'LMNO3454', details: 'Update cost: $165.00' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3454', details: 'Precision calibration completed' },
  { timestamp: '2025-10-17 11:15:45', eventType: 'Performance Check', assetId: 'LMNO3454', details: 'Efficiency at 96%' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Location Change', assetId: 'LMNO3454', details: 'Moved to Quality Station' },
  { timestamp: '2025-10-15 10:45:22', eventType: 'Status Change', assetId: 'LMNO3454', details: 'Status changed to Testing' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3454', details: 'Regular check completed' },

  // LMNO3455 - C300
  { timestamp: '2025-10-23 08:45:00', eventType: 'Cost Update', assetId: 'LMNO3455', details: 'Cost updated to $925.99' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Status Change', assetId: 'LMNO3455', details: 'Status changed to Active' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Location Change', assetId: 'LMNO3455', details: 'Moved to Production Zone G' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Performance Check', assetId: 'LMNO3455', details: 'Performance standards met' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Maintenance', assetId: 'LMNO3455', details: 'Routine service completed' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3455', details: 'Calibration check passed' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Status Change', assetId: 'LMNO3455', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Location Change', assetId: 'LMNO3455', details: 'Moved to Test Lab' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Cost Update', assetId: 'LMNO3455', details: 'Service cost: $135.00' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Performance Check', assetId: 'LMNO3455', details: 'Efficiency at 92%' },

  // LMNO3456 - D400
  { timestamp: '2025-10-23 08:40:00', eventType: 'Status Change', assetId: 'LMNO3456', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Performance Check', assetId: 'LMNO3456', details: 'Performance analysis completed' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3456', details: 'Moved to Assembly Line B' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Maintenance', assetId: 'LMNO3456', details: 'Scheduled service completed' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Cost Update', assetId: 'LMNO3456', details: 'Maintenance cost: $210.00' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Calibration', assetId: 'LMNO3456', details: 'System recalibrated' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Status Change', assetId: 'LMNO3456', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3456', details: 'Efficiency at 91%' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Location Change', assetId: 'LMNO3456', details: 'Moved to Service Bay' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3456', details: 'Component check completed' },

  // LMNO3457 - D400
  { timestamp: '2025-10-23 08:35:00', eventType: 'Status Change', assetId: 'LMNO3457', details: 'Status changed to Pending' },
  { timestamp: '2025-10-22 13:15:15', eventType: 'Performance Check', assetId: 'LMNO3457', details: 'Performance issues detected' },
  { timestamp: '2025-10-21 10:10:03', eventType: 'Location Change', assetId: 'LMNO3457', details: 'Moved to Diagnostic Bay' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3457', details: 'Repair quote: $380.00' },
  { timestamp: '2025-10-19 09:45:30', eventType: 'Maintenance', assetId: 'LMNO3457', details: 'Inspection scheduled' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Status Change', assetId: 'LMNO3457', details: 'Status changed to Active' },
  { timestamp: '2025-10-17 11:15:45', eventType: 'Calibration', assetId: 'LMNO3457', details: 'Calibration adjustment needed' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3457', details: 'Efficiency at 78%' },
  { timestamp: '2025-10-15 10:45:22', eventType: 'Location Change', assetId: 'LMNO3457', details: 'Moved to Testing Lab' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Status Change', assetId: 'LMNO3457', details: 'Status changed to Testing' },

  // LMNO3458 - D400
  { timestamp: '2025-10-23 08:30:00', eventType: 'Maintenance', assetId: 'LMNO3458', details: 'Regular maintenance completed' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Status Change', assetId: 'LMNO3458', details: 'Status changed to Active' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Location Change', assetId: 'LMNO3458', details: 'Moved to Production Zone H' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3458', details: 'Service cost: $190.00' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Performance Check', assetId: 'LMNO3458', details: 'Performance verified' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3458', details: 'Calibration completed' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Status Change', assetId: 'LMNO3458', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Location Change', assetId: 'LMNO3458', details: 'Moved to Test Bay' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Cost Update', assetId: 'LMNO3458', details: 'Maintenance cost: $155.00' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Performance Check', assetId: 'LMNO3458', details: 'Efficiency at 94%' },

  // LMNO3459 - D400
  { timestamp: '2025-10-23 08:25:00', eventType: 'Status Change', assetId: 'LMNO3459', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Performance Check', assetId: 'LMNO3459', details: 'Performance check failed' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3459', details: 'Moved to Service Center' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Cost Update', assetId: 'LMNO3459', details: 'Repair estimate: $420.00' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Maintenance', assetId: 'LMNO3459', details: 'Major service required' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Status Change', assetId: 'LMNO3459', details: 'Status changed to Active' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Calibration', assetId: 'LMNO3459', details: 'Calibration failed' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3459', details: 'Efficiency at 72%' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Location Change', assetId: 'LMNO3459', details: 'Moved to Testing Area' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3459', details: 'Component inspection completed' },

  // LMNO3460 - D400
  { timestamp: '2025-10-23 08:20:00', eventType: 'Status Change', assetId: 'LMNO3460', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 13:15:15', eventType: 'Performance Check', assetId: 'LMNO3460', details: 'Performance optimized' },
  { timestamp: '2025-10-21 10:10:03', eventType: 'Location Change', assetId: 'LMNO3460', details: 'Moved to Production Line I' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Maintenance', assetId: 'LMNO3460', details: 'Preventive maintenance completed' },
  { timestamp: '2025-10-19 09:45:30', eventType: 'Cost Update', assetId: 'LMNO3460', details: 'Service cost: $175.00' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3460', details: 'System calibrated' },
  { timestamp: '2025-10-17 11:15:45', eventType: 'Status Change', assetId: 'LMNO3460', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3460', details: 'Efficiency at 95%' },
  { timestamp: '2025-10-15 10:45:22', eventType: 'Location Change', assetId: 'LMNO3460', details: 'Moved to Quality Check' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3460', details: 'System update completed' },

  // LMNO3461 - E500
  { timestamp: '2025-10-23 08:15:00', eventType: 'Location Change', assetId: 'LMNO3461', details: 'Moved to Warehouse B' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Status Change', assetId: 'LMNO3461', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Performance Check', assetId: 'LMNO3461', details: 'Performance degraded' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3461', details: 'Repair cost: $385.00' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Maintenance', assetId: 'LMNO3461', details: 'Major repair needed' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3461', details: 'Calibration check failed' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Status Change', assetId: 'LMNO3461', details: 'Status changed to Active' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Location Change', assetId: 'LMNO3461', details: 'Moved to Production Zone J' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Performance Check', assetId: 'LMNO3461', details: 'Efficiency at 76%' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3461', details: 'Initial assessment completed' },

  // LMNO3462 - E500
  { timestamp: '2025-10-23 08:10:00', eventType: 'Performance Check', assetId: 'LMNO3462', details: 'Performance verified' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Maintenance', assetId: 'LMNO3462', details: 'Regular maintenance completed' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3462', details: 'Moved to Assembly Line C' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Status Change', assetId: 'LMNO3462', details: 'Status changed to Active' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Cost Update', assetId: 'LMNO3462', details: 'Maintenance cost: $165.00' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Calibration', assetId: 'LMNO3462', details: 'System calibrated' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Status Change', assetId: 'LMNO3462', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3462', details: 'Efficiency at 97%' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Location Change', assetId: 'LMNO3462', details: 'Moved to Testing Lab' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3462', details: 'Software update completed' },

  // LMNO3463 - E500
  { timestamp: '2025-10-23 08:05:00', eventType: 'Status Change', assetId: 'LMNO3463', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 13:15:15', eventType: 'Performance Check', assetId: 'LMNO3463', details: 'Performance optimal' },
  { timestamp: '2025-10-21 10:10:03', eventType: 'Location Change', assetId: 'LMNO3463', details: 'Moved to Production Line K' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Maintenance', assetId: 'LMNO3463', details: 'Routine check completed' },
  { timestamp: '2025-10-19 09:45:30', eventType: 'Cost Update', assetId: 'LMNO3463', details: 'Service cost: $145.00' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3463', details: 'Calibration verified' },
  { timestamp: '2025-10-17 11:15:45', eventType: 'Status Change', assetId: 'LMNO3463', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3463', details: 'Efficiency at 95%' },
  { timestamp: '2025-10-15 10:45:22', eventType: 'Location Change', assetId: 'LMNO3463', details: 'Moved to Quality Station' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3463', details: 'System optimization completed' },

  // LMNO3464 - E500
  { timestamp: '2025-10-23 08:00:00', eventType: 'Performance Check', assetId: 'LMNO3464', details: 'Performance review completed' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Maintenance', assetId: 'LMNO3464', details: 'Regular service completed' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Location Change', assetId: 'LMNO3464', details: 'Moved to Station L' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Status Change', assetId: 'LMNO3464', details: 'Status changed to Active' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Cost Update', assetId: 'LMNO3464', details: 'Maintenance cost: $155.00' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3464', details: 'System recalibrated' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Performance Check', assetId: 'LMNO3464', details: 'Efficiency at 93%' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Location Change', assetId: 'LMNO3464', details: 'Moved to Testing Area' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Status Change', assetId: 'LMNO3464', details: 'Status changed to Testing' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3464', details: 'Component check completed' },

  // LMNO3465 - E500
  { timestamp: '2025-10-23 07:55:00', eventType: 'Status Change', assetId: 'LMNO3465', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Performance Check', assetId: 'LMNO3465', details: 'Performance validated' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3465', details: 'Moved to Production Zone M' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Maintenance', assetId: 'LMNO3465', details: 'Scheduled maintenance completed' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Cost Update', assetId: 'LMNO3465', details: 'Service cost: $170.00' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Calibration', assetId: 'LMNO3465', details: 'Calibration check passed' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Status Change', assetId: 'LMNO3465', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3465', details: 'Efficiency at 96%' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Location Change', assetId: 'LMNO3465', details: 'Moved to Quality Check' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3465', details: 'System update completed' },

  // LMNO3466 - F600
  { timestamp: '2025-10-23 07:50:00', eventType: 'Status Change', assetId: 'LMNO3466', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 13:15:15', eventType: 'Performance Check', assetId: 'LMNO3466', details: 'Performance below threshold' },
  { timestamp: '2025-10-21 10:10:03', eventType: 'Location Change', assetId: 'LMNO3466', details: 'Moved to Inspection Area' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3466', details: 'Assessment cost: $290.00' },
  { timestamp: '2025-10-19 09:45:30', eventType: 'Maintenance', assetId: 'LMNO3466', details: 'Diagnostic check scheduled' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3466', details: 'Calibration needed' },
  { timestamp: '2025-10-17 11:15:45', eventType: 'Status Change', assetId: 'LMNO3466', details: 'Status changed to Pending' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3466', details: 'Efficiency at 81%' },
  { timestamp: '2025-10-15 10:45:22', eventType: 'Location Change', assetId: 'LMNO3466', details: 'Moved to Testing Bay' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3466', details: 'Initial assessment completed' },

  // LMNO3467 - F600
  { timestamp: '2025-10-23 07:45:00', eventType: 'Status Change', assetId: 'LMNO3467', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Performance Check', assetId: 'LMNO3467', details: 'Critical issues detected' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Location Change', assetId: 'LMNO3467', details: 'Moved to Repair Center' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3467', details: 'Repair estimate: $550.00' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Maintenance', assetId: 'LMNO3467', details: 'Major repair scheduled' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Status Change', assetId: 'LMNO3467', details: 'Status changed to Active' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Calibration', assetId: 'LMNO3467', details: 'Calibration failed' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Performance Check', assetId: 'LMNO3467', details: 'Efficiency at 65%' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Location Change', assetId: 'LMNO3467', details: 'Moved to Diagnostic Bay' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3467', details: 'Emergency inspection completed' },

  // LMNO3468 - F600
  { timestamp: '2025-10-23 07:40:00', eventType: 'Status Change', assetId: 'LMNO3468', details: 'Status changed to Pending' },
  { timestamp: '2025-10-22 14:15:15', eventType: 'Performance Check', assetId: 'LMNO3468', details: 'Performance issues found' },
  { timestamp: '2025-10-21 11:10:03', eventType: 'Location Change', assetId: 'LMNO3468', details: 'Moved to Assessment Area' },
  { timestamp: '2025-10-20 15:15:00', eventType: 'Cost Update', assetId: 'LMNO3468', details: 'Inspection cost: $275.00' },
  { timestamp: '2025-10-19 10:45:30', eventType: 'Maintenance', assetId: 'LMNO3468', details: 'Inspection scheduled' },
  { timestamp: '2025-10-18 13:30:00', eventType: 'Calibration', assetId: 'LMNO3468', details: 'Calibration check needed' },
  { timestamp: '2025-10-17 09:15:45', eventType: 'Status Change', assetId: 'LMNO3468', details: 'Status changed to Active' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3468', details: 'Efficiency at 83%' },
  { timestamp: '2025-10-15 11:45:22', eventType: 'Location Change', assetId: 'LMNO3468', details: 'Moved to Testing Lab' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3468', details: 'Regular check completed' },

  // LMNO3469 - F600
  { timestamp: '2025-10-23 07:35:00', eventType: 'Status Change', assetId: 'LMNO3469', details: 'Status changed to Maintenance' },
  { timestamp: '2025-10-22 13:15:15', eventType: 'Performance Check', assetId: 'LMNO3469', details: 'Performance degradation detected' },
  { timestamp: '2025-10-21 10:10:03', eventType: 'Location Change', assetId: 'LMNO3469', details: 'Moved to Service Bay' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3469', details: 'Repair quote: $485.00' },
  { timestamp: '2025-10-19 09:45:30', eventType: 'Maintenance', assetId: 'LMNO3469', details: 'Service assessment scheduled' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Status Change', assetId: 'LMNO3469', details: 'Status changed to Active' },
  { timestamp: '2025-10-17 11:15:45', eventType: 'Calibration', assetId: 'LMNO3469', details: 'Calibration adjustment needed' },
  { timestamp: '2025-10-16 14:00:00', eventType: 'Performance Check', assetId: 'LMNO3469', details: 'Efficiency at 79%' },
  { timestamp: '2025-10-15 10:45:22', eventType: 'Location Change', assetId: 'LMNO3469', details: 'Moved to Inspection Zone' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'Maintenance', assetId: 'LMNO3469', details: 'Initial check completed' },

  // LMNO3470 - F600
  { timestamp: '2025-10-23 07:30:00', eventType: 'Status Change', assetId: 'LMNO3470', details: 'Status changed to Active' },
  { timestamp: '2025-10-22 15:15:15', eventType: 'Performance Check', assetId: 'LMNO3470', details: 'Initial performance verified' },
  { timestamp: '2025-10-21 12:10:03', eventType: 'Location Change', assetId: 'LMNO3470', details: 'Moved to Production Line N' },
  { timestamp: '2025-10-20 14:15:00', eventType: 'Cost Update', assetId: 'LMNO3470', details: 'Setup cost: $225.00' },
  { timestamp: '2025-10-19 11:45:30', eventType: 'Maintenance', assetId: 'LMNO3470', details: 'Initial setup completed' },
  { timestamp: '2025-10-18 15:30:00', eventType: 'Calibration', assetId: 'LMNO3470', details: 'First calibration completed' },
  { timestamp: '2025-10-17 10:15:45', eventType: 'Status Change', assetId: 'LMNO3470', details: 'Status changed to Testing' },
  { timestamp: '2025-10-16 13:00:00', eventType: 'Performance Check', assetId: 'LMNO3470', details: 'Baseline efficiency established' },
  { timestamp: '2025-10-15 09:45:22', eventType: 'Location Change', assetId: 'LMNO3470', details: 'Moved to Testing Area' },
  { timestamp: '2025-10-14 16:30:15', eventType: 'New Asset', assetId: 'LMNO3470', details: 'Asset registered in system' }
];

export const notificationData: Notification[] = [
  { timestamp: '2025-10-23 09:50:00', severity: 'error', assetId: 'LMNO3467', message: 'Maintenance check overdue by 48 hours', isRead: false },
  { timestamp: '2025-10-23 09:35:12', severity: 'warning', assetId: 'LMNO3469', message: 'Approaching maintenance window', isRead: false },
  { timestamp: '2025-10-23 09:20:45', severity: 'info', assetId: 'LMNO3452', message: 'Cost adjustment approved', isRead: true },
  { timestamp: '2025-10-23 09:10:30', severity: 'warning', assetId: 'LMNO3461', message: 'Asset moved outside designated zone', isRead: false },
  { timestamp: '2025-10-23 08:55:15', severity: 'error', assetId: 'LMNO3468', message: 'Failed routine system check', isRead: true },
  { timestamp: '2025-10-23 08:40:00', severity: 'info', assetId: 'LMNO3470', message: 'New asset registration completed', isRead: true },
  { timestamp: '2025-10-23 08:25:30', severity: 'warning', assetId: 'LMNO3459', message: 'Maintenance schedule updated', isRead: true },
  { timestamp: '2025-10-23 08:10:00', severity: 'info', assetId: 'LMNO3466', message: 'Status update confirmed', isRead: true },
];