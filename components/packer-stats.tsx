import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function PackerStats() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Your Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Orders Completed Today</span>
                <span className="font-medium">12/15</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Average Pack Time</span>
                <span className="font-medium">3m 24s</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>Accuracy Rate</span>
                <span className="font-medium">98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Today's Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted p-3 text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
            <div className="rounded-lg bg-muted p-3 text-center">
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs text-muted-foreground">In Progress</div>
            </div>
            <div className="rounded-lg bg-muted p-3 text-center">
              <div className="text-2xl font-bold">41m</div>
              <div className="text-xs text-muted-foreground">Avg. Time</div>
            </div>
            <div className="rounded-lg bg-muted p-3 text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

