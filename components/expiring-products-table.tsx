"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Percent } from "lucide-react"

// Sample expiring products data
const expiringProducts = [
  {
    id: "P003",
    name: "Sourdough Bread",
    sku: "BAKERY-BRD-SDG",
    category: "Bakery",
    quantity: 18,
    location: "C3-08",
    expiryDate: "2023-03-08",
    daysLeft: 2,
    suggestedDiscount: 25,
  },
  {
    id: "P005",
    name: "Spinach Bag",
    sku: "FRSH-VEG-SPN",
    category: "Fresh Produce",
    quantity: 15,
    location: "A2-12",
    expiryDate: "2023-03-09",
    daysLeft: 3,
    suggestedDiscount: 20,
  },
  {
    id: "P004",
    name: "Chicken Breast 500g",
    sku: "MEAT-CHK-BRS",
    category: "Meat",
    quantity: 24,
    location: "D1-05",
    expiryDate: "2023-03-10",
    daysLeft: 4,
    suggestedDiscount: 15,
  },
  {
    id: "P002",
    name: "Whole Milk 1L",
    sku: "DAIRY-MILK-1L",
    category: "Dairy",
    quantity: 32,
    location: "B2-15",
    expiryDate: "2023-03-12",
    daysLeft: 6,
    suggestedDiscount: 10,
  },
  {
    id: "P001",
    name: "Organic Bananas",
    sku: "FRSH-BAN-ORG",
    category: "Fresh Produce",
    quantity: 45,
    location: "A1-23",
    expiryDate: "2023-03-15",
    daysLeft: 9,
    suggestedDiscount: 5,
  },
]

export function ExpiringProductsTable() {
  const getExpiryStatus = (daysLeft: number) => {
    if (daysLeft <= 3) return "critical"
    if (daysLeft <= 7) return "warning"
    return "normal"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-500 text-white"
      case "warning":
        return "bg-yellow-500 text-white"
      case "normal":
        return "bg-blue-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Days Left</TableHead>
            <TableHead>Suggested Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expiringProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.location}</TableCell>
              <TableCell>{new Date(product.expiryDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(getExpiryStatus(product.daysLeft))}>{product.daysLeft} days</Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="gap-1">
                  <Percent className="h-3 w-3" />
                  {product.suggestedDiscount}% Discount
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

