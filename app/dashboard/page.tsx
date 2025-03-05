import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OrderStatusChart } from "@/components/order-status-chart"
import { PackerPerformanceTable } from "@/components/packer-performance-table"
import { OrdersOverviewChart } from "@/components/orders-overview-chart"
import { RecentOrdersTable } from "@/components/recent-orders-table"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Manager's Dashboard</h1>
        <p className="text-muted-foreground">Monitor warehouse operations and performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Orders Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Packing Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3m 24s</div>
            <p className="text-xs text-muted-foreground">-18s from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">97.8%</div>
            <p className="text-xs text-muted-foreground">+0.6% from yesterday</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
            <CardDescription>Real-time overview of current orders</CardDescription>
          </CardHeader>
          <CardContent>
            <OrderStatusChart />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Orders Overview</CardTitle>
            <CardDescription>Hourly order volume</CardDescription>
          </CardHeader>
          <CardContent>
            <OrdersOverviewChart />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Tabs defaultValue="performance">
          <TabsList>
            <TabsTrigger value="performance">Packer Performance</TabsTrigger>
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
          </TabsList>
          <TabsContent value="performance" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Packer Performance</CardTitle>
                <CardDescription>Efficiency metrics for all packers</CardDescription>
              </CardHeader>
              <CardContent>
                <PackerPerformanceTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest order statuses and details</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentOrdersTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

