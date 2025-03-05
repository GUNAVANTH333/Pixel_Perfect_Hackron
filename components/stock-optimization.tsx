"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, TrendingDown, MoveHorizontal } from "lucide-react"

export function StockOptimization() {
  const optimizationSuggestions = [
    {
      id: 1,
      type: "move",
      product: "Organic Bananas",
      from: "A1-23",
      to: "A1-05",
      reason: "Consolidate with similar products for faster picking",
      priority: "medium",
    },
    {
      id: 2,
      type: "restock",
      product: "Sourdough Bread",
      location: "C3-08",
      currentStock: 18,
      suggestedStock: 30,
      reason: "High demand product running low",
      priority: "high",
    },
    {
      id: 3,
      type: "reduce",
      product: "Orange Juice 1L",
      location: "C1-14",
      currentStock: 27,
      suggestedStock: 15,
      reason: "Slow moving inventory taking up space",
      priority: "low",
    },
    {
      id: 4,
      type: "move",
      product: "Pasta Sauce",
      from: "B3-19",
      to: "B3-20",
      reason: "Place next to Spaghetti for faster order picking",
      priority: "medium",
    },
    {
      id: 5,
      type: "restock",
      product: "Yogurt 500g",
      location: "D2-07",
      currentStock: 19,
      suggestedStock: 35,
      reason: "Popular item with increasing demand",
      priority: "high",
    },
  ]

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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "move":
        return <MoveHorizontal className="h-4 w-4" />
      case "restock":
        return <TrendingUp className="h-4 w-4" />
      case "reduce":
        return <TrendingDown className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {optimizationSuggestions.map((suggestion) => (
        <Card key={suggestion.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge className={getPriorityColor(suggestion.priority)}>{suggestion.priority.toUpperCase()}</Badge>
                <CardTitle className="text-base">{suggestion.product}</CardTitle>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                {getTypeIcon(suggestion.type)}
                {suggestion.type === "move" ? "Move" : suggestion.type === "restock" ? "Restock" : "Reduce"}
              </Badge>
            </div>
            <CardDescription>{suggestion.reason}</CardDescription>
          </CardHeader>
          <CardContent>
            {suggestion.type === "move" ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Location</p>
                  <p className="font-medium">{suggestion.from}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Suggested Location</p>
                  <p className="font-medium">{suggestion.to}</p>
                </div>
                <Button size="sm">Apply</Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{suggestion.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Stock</p>
                  <p className="font-medium">{suggestion.currentStock}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Suggested Stock</p>
                  <p className="font-medium">{suggestion.suggestedStock}</p>
                </div>
                <Button size="sm">Apply</Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

