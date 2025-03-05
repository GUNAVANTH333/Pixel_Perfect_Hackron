import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function InventoryStats() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Inventory Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Storage Capacity</span>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Low Stock Items</span>
                <span className="font-medium">12</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Expiring Soon</span>
                <span className="font-medium">8</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Zone Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Zone A (Fresh)</span>
                <span className="font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Zone B (Dairy)</span>
                <span className="font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Zone C (Dry Goods)</span>
                <span className="font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Zone D (Frozen)</span>
                <span className="font-medium">90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

