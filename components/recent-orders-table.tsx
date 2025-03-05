"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample order data
const recentOrders = [
  {
    id: "ORD-1234",
    customer: "John Doe",
    items: 3,
    total: 42.25,
    status: "completed",
    packer: "Alex Johnson",
    timestamp: "2023-03-06T10:45:00",
  },
  {
    id: "ORD-1235",
    customer: "Jane Smith",
    items: 4,
    total: 74.99,
    status: "in-progress",
    packer: "Sarah Williams",
    timestamp: "2023-03-06T11:15:00",
  },
  {
    id: "ORD-1236",
    customer: "Robert Johnson",
    items: 2,
    total: 29.5,
    status: "pending",
    packer: null,
    timestamp: "2023-03-06T11:25:00",
  },
  {
    id: "ORD-1237",
    customer: "Emily Davis",
    items: 3,
    total: 38.75,
    status: "in-progress",
    packer: "Michael Brown",
    timestamp: "2023-03-06T11:30:00",
  },
  {
    id: "ORD-1238",
    customer: "William Wilson",
    items: 5,
    total: 92.3,
    status: "pending",
    packer: null,
    timestamp: "2023-03-06T11:35:00",
  },
  {
    id: "ORD-1239",
    customer: "Olivia Martinez",
    items: 1,
    total: 18.99,
    status: "completed",
    packer: "Emily Davis",
    timestamp: "2023-03-06T11:40:00",
  },
]

export function RecentOrdersTable() {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead className="hidden md:table-cell">Time</TableHead>
          <TableHead className="hidden md:table-cell">Items</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Packer</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell className="hidden md:table-cell">{formatTime(order.timestamp)}</TableCell>
            <TableCell className="hidden md:table-cell">{order.items}</TableCell>
            <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
            <TableCell>
              <Badge className={getStatusColor(order.status)}>
                {order.status === "pending" ? "PENDING" : order.status === "in-progress" ? "IN PROGRESS" : "COMPLETED"}
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">{order.packer || "-"}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    View details
                  </DropdownMenuItem>
                  <DropdownMenuItem>Assign packer</DropdownMenuItem>
                  <DropdownMenuItem>Print invoice</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

