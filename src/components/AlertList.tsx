'use client'

import { useState } from 'react'
import type { Alert } from '@/types/product'

export default function AlertList() {
  // Sample data - replace with real data from your database
  const [alerts, setAlerts] = useState<Alert[]>([])

  const toggleAlert = async (alertId: string, active: boolean) => {
    try {
      // Update alert status in database
      setAlerts(alerts.map(alert =>
        alert.id === alertId ? { ...alert, active } : alert
      ))
    } catch (error) {
      console.error('Error updating alert:', error)
    }
  }

  return (
    <div className="space-y-4">
      {alerts.length === 0 ? (
        <p className="text-gray-500">No alerts set. Create an alert to get notified of price drops!</p>
      ) : (
        alerts.map((alert) => (
          <div key={alert.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Product Name</h3>
                <p className="text-sm text-gray-500">
                  Target Price: {alert.targetPrice} KWD
                </p>
              </div>
              <div className="flex items-center gap-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={alert.active}
                    onChange={(e) => toggleAlert(alert.id, e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
                <button
                  onClick={() => {
                    // Delete alert logic
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}