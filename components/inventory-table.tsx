"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Sample inventory data
const inventoryItems = [
  {
    id: "P001",
    name: "Organic Bananas",
    sku: "FRSH-BAN-ORG",
    category: "Fresh Produce",
    quantity: 45,
    location: "A1-23",
    expiryDate: "2023-03-15",
  },
  {
    id: "P002",
    name: "Whole Milk 1L",
    sku: "DAIRY-MILK-1L",
    category: "Dairy",
    quantity: 32,
    location: "B2-15",
    expiryDate: "2023-03-12",
  },
  {
    id: "P003",
    name: "Sourdough Bread",
    sku: "BAKERY-BRD-SDG",
    category: "Bakery",
    quantity: 18,
    location: "C3-08",
    expiryDate: "2023-03-08",
  },
  {
    id: "P004",
    name: "Chicken Breast 500g",
    sku: "MEAT-CHK-BRS",
    category: "Meat",
    quantity: 24,
    location: "D1-05",
    expiryDate: "2023-03-10",
  },
  {
    id: "P005",
    name: "Spinach Bag",
    sku: "FRSH-VEG-SPN",
    category: "Fresh Produce",
    quantity: 15,
    location: "A2-12",
    expiryDate: "2023-03-09",
  },
  {
    id: "P006",
    name: "Pasta Sauce",
    sku: "GROC-SAU-PST",
    category: "Grocery",
    quantity: 42,
    location: "B3-19",
    expiryDate: "2023-06-20",
  },
  {
    id: "P007",
    name: "Spaghetti 500g",
    sku: "GROC-PST-SPG",
    category: "Grocery",
    quantity: 38,
    location: "B3-20",
    expiryDate: "2023-09-15",
  },
  {
    id: "P008",
    name: "Orange Juice 1L",
    sku: "BEV-JCE-ORG",
    category: "Beverages",
    quantity: 27,
    location: "C1-14",
    expiryDate: "2023-03-25",
  },
  {
    id: "P009",
    name: "Yogurt 500g",
    sku: "DAIRY-YOG-PLN",
    category: "Dairy",
    quantity: 19,
    location: "D2-07",
    expiryDate: "2023-03-18",
  },
  {
    id: "P010",
    name: "Apples 1kg",
    sku: "FRSH-APL-RED",
    category: "Fresh Produce",
    quantity: 31,
    location: "A1-05",
    expiryDate: "2023-03-20",
  },
]

export function InventoryTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = inventoryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStockStatus = (quantity: number) => {
    if (quantity <= 10) return "low"
    if (quantity <= 20) return "medium"
    return "high"
  }

  const getExpiryStatus = (date: string) => {
    const expiryDate = new Date(date)
    const today = new Date()
    const diffTime = expiryDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays <= 3) return "critical"
    if (diffDays <= 7) return "warning"
    return "good"
  }

  return (
    <div>
      <div className="mb-4 flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search inventory..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="ml-2">
          Filter
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Expiry Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {item.quantity}
                    <Badge
                      variant="outline"
                      className={`ml-2 ${
                        getStockStatus(item.quantity) === "low"
                          ? "bg-red-500 text-white"
                          : getStockStatus(item.quantity) === "medium"
                            ? "bg-yellow-500 text-white"
                            : "bg-green-500 text-white"
                      }`}
                    >
                      {getStockStatus(item.quantity) === "low"
                        ? "Low"
                        : getStockStatus(item.quantity) === "medium"
                          ? "Medium"
                          : "High"}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {new Date(item.expiryDate).toLocaleDateString()}
                    <Badge
                      variant="outline"
                      className={`ml-2 ${
                        getExpiryStatus(item.expiryDate) === "critical"
                          ? "bg-red-500 text-white"
                          : getExpiryStatus(item.expiryDate) === "warning"
                            ? "bg-yellow-500 text-white"
                            : "bg-green-500 text-white"
                      }`}
                    >
                      {getExpiryStatus(item.expiryDate) === "critical"
                        ? "Critical"
                        : getExpiryStatus(item.expiryDate) === "warning"
                          ? "Warning"
                          : "Good"}
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

