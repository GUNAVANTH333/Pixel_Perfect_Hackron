"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Sample order data
const initialOrders = [
  {
    id: "ORD-1234",
    customer: "John Doe",
    items: [
      { id: "ITM-001", name: "Organic Bananas", quantity: 2, location: "A1-23" },
      { id: "ITM-002", name: "Whole Milk 1L", quantity: 1, location: "B2-15" },
      { id: "ITM-003", name: "Sourdough Bread", quantity: 1, location: "C3-08" },
    ],
    priority: "high",
    timestamp: "2023-03-06T10:15:00",
    status: "pending",
  },
  {
    id: "ORD-1235",
    customer: "Jane Smith",
    items: [
      { id: "ITM-004", name: "Chicken Breast 500g", quantity: 1, location: "D1-05" },
      { id: "ITM-005", name: "Spinach Bag", quantity: 1, location: "A2-12" },
      { id: "ITM-006", name: "Pasta Sauce", quantity: 2, location: "B3-19" },
      { id: "ITM-007", name: "Spaghetti 500g", quantity: 1, location: "B3-20" },
    ],
    priority: "medium",
    timestamp: "2023-03-06T10:20:00",
    status: "pending",
  },
  {
    id: "ORD-1236",
    customer: "Robert Johnson",
    items: [
      { id: "ITM-008", name: "Orange Juice 1L", quantity: 2, location: "C1-14" },
      { id: "ITM-009", name: "Yogurt 500g", quantity: 3, location: "D2-07" },
    ],
    priority: "low",
    timestamp: "2023-03-06T10:25:00",
    status: "pending",
  },
  {
    id: "ORD-1237",
    customer: "Emily Davis",
    items: [
      { id: "ITM-010", name: "Apples 1kg", quantity: 1, location: "A1-05" },
      { id: "ITM-011", name: "Cereal Box", quantity: 1, location: "B4-22" },
      { id: "ITM-012", name: "Coffee Beans 250g", quantity: 1, location: "C2-11" },
    ],
    priority: "high",
    timestamp: "2023-03-06T10:30:00",
    status: "pending",
  },
]

export function PackerOrderList() {
  const [orders, setOrders] = useState(initialOrders)
  const { toast } = useToast()

  const handleStartPacking = (orderId: string) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: "in-progress" } : order)))
    toast({
      title: "Order started",
      description: `You've started packing order ${orderId}`,
    })
  }

  const handleCompletePacking = (orderId: string) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: "completed" } : order)))
    toast({
      title: "Order completed",
      description: `You've completed packing order ${orderId}`,
      variant: "default",
    })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500 text-white"
      case "medium":
        return "bg-yellow-500 text-white"
      case "low":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-gray-500 text-white"
      case "in-progress":
        return "bg-blue-500 text-white"
      case "completed":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Orders to Pack</h2>
        <Badge variant="outline" className="px-2 py-1">
          {orders.filter((o) => o.status !== "completed").length} Active Orders
        </Badge>
      </div>

      {orders.map((order) => (
        <Card key={order.id} className={order.status === "completed" ? "opacity-60" : ""}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle>{order.id}</CardTitle>
                <Badge className={getPriorityColor(order.priority)}>{order.priority.toUpperCase()}</Badge>
                <Badge className={getStatusColor(order.status)}>
                  {order.status === "pending"
                    ? "PENDING"
                    : order.status === "in-progress"
                      ? "IN PROGRESS"
                      : "COMPLETED"}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {formatTime(order.timestamp)}
              </div>
            </div>
            <CardDescription>Customer: {order.customer}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="mb-2 font-medium">Items to Pack:</h3>
              <ul className="space-y-2">
                {order.items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between rounded-md border p-2">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="ml-2 text-sm text-muted-foreground">x{item.quantity}</span>
                    </div>
                    <Badge variant="outline" className="bg-muted">
                      Location: {item.location}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end space-x-2">
              {order.status === "pending" && (
                <Button onClick={() => handleStartPacking(order.id)}>Start Packing</Button>
              )}
              {order.status === "in-progress" && (
                <Button onClick={() => handleCompletePacking(order.id)}>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark as Packed
                </Button>
              )}
              {order.status === "completed" && (
                <Button variant="outline" disabled>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Completed
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

