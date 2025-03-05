"use client"

export function OrdersOverviewChart() {
  const data = [
    { hour: "8 AM", orders: 5 },
    { hour: "9 AM", orders: 8 },
    { hour: "10 AM", orders: 12 },
    { hour: "11 AM", orders: 15 },
    { hour: "12 PM", orders: 18 },
    { hour: "1 PM", orders: 14 },
    { hour: "2 PM", orders: 10 },
    { hour: "3 PM", orders: 8 },
    { hour: "4 PM", orders: 6 },
  ]

  const maxOrders = Math.max(...data.map((item) => item.orders))

  return (
    <div className="h-[240px] w-full">
      <div className="flex h-[200px] items-end space-x-2">
        {data.map((item) => (
          <div key={item.hour} className="flex flex-1 flex-col items-center">
            <div
              className="w-full bg-primary rounded-t-sm transition-all duration-500"
              style={{
                height: `${(item.orders / maxOrders) * 100}%`,
                opacity: 0.7 + (item.orders / maxOrders) * 0.3,
              }}
            />
            <div className="mt-2 text-xs">{item.hour}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

