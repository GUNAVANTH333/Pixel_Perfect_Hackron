"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"

type SortDirection = "asc" | "desc" | null
type SortField = "name" | "completed" | "avgTime" | "accuracy" | null

const packers = [
  {
    id: 1,
    name: "Rahul",
    completed: 18,
    avgTime: 185, // in seconds
    accuracy: 98.5,
  },
  {
    id: 2,
    name: "Vivek",
    completed: 22,
    avgTime: 162,
    accuracy: 99.2,
  },
  {
    id: 3,
    name: "Ali",
    completed: 15,
    avgTime: 210,
    accuracy: 97.8,
  },
  {
    id: 4,
    name: "Varun",
    completed: 20,
    avgTime: 175,
    accuracy: 98.9,
  },
  {
    id: 5,
    name: "Yash",
    completed: 17,
    avgTime: 195,
    accuracy: 98.1,
  },
]

export function PackerPerformanceTable() {
  const [sortField, setSortField] = useState<SortField>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : sortDirection === "desc" ? null : "asc")
      if (sortDirection === "desc") {
        setSortField(null)
      }
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const getSortedPackers = () => {
    if (!sortField || !sortDirection) return packers

    return [...packers].sort((a, b) => {
      if (sortDirection === "asc") {
        return a[sortField] > b[sortField] ? 1 : -1
      } else {
        return a[sortField] < b[sortField] ? 1 : -1
      }
    })
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="ml-2 h-4 w-4" />
    if (sortDirection === "asc") return <ArrowUp className="ml-2 h-4 w-4" />
    return <ArrowDown className="ml-2 h-4 w-4" />
  }

  const getPerformanceStatus = (accuracy: number) => {
    if (accuracy >= 99) return "excellent"
    if (accuracy >= 97) return "good"
    return "needs-improvement"
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Packer</TableHead>
          <TableHead>
            <Button variant="ghost" onClick={() => handleSort("completed")} className="p-0 font-medium">
              Orders Completed
              {getSortIcon("completed")}
            </Button>
          </TableHead>
          <TableHead>
            <Button variant="ghost" onClick={() => handleSort("avgTime")} className="p-0 font-medium">
              Avg. Pack Time
              {getSortIcon("avgTime")}
            </Button>
          </TableHead>
          <TableHead>
            <Button variant="ghost" onClick={() => handleSort("accuracy")} className="p-0 font-medium">
              Accuracy
              {getSortIcon("accuracy")}
            </Button>
          </TableHead>
          <TableHead>Performance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {getSortedPackers().map((packer) => (
          <TableRow key={packer.id}>
            <TableCell className="font-medium">{packer.name}</TableCell>
            <TableCell>{packer.completed}</TableCell>
            <TableCell>{formatTime(packer.avgTime)}</TableCell>
            <TableCell>{packer.accuracy}%</TableCell>
            <TableCell>
              <Badge
                className={
                  getPerformanceStatus(packer.accuracy) === "excellent"
                    ? "bg-green-500"
                    : getPerformanceStatus(packer.accuracy) === "good"
                      ? "bg-blue-500"
                      : "bg-yellow-500"
                }
              >
                {getPerformanceStatus(packer.accuracy) === "excellent"
                  ? "Excellent"
                  : getPerformanceStatus(packer.accuracy) === "good"
                    ? "Good"
                    : "Needs Improvement"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

