import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InventoryScanner } from "@/components/inventory-scanner"
import { InventoryTable } from "@/components/inventory-table"
import { InventoryStats } from "@/components/inventory-stats"
import { ExpiringProductsTable } from "@/components/expiring-products-table"
import { StockOptimization } from "@/components/stock-optimization"

export default function InventoryPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Logistics & Inventory Management</h1>
        <p className="text-muted-foreground">Track and optimize warehouse inventory</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Scanner</CardTitle>
              <CardDescription>Scan barcodes to update inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <InventoryScanner />
            </CardContent>
          </Card>
        </div>
        <div>
          <InventoryStats />
        </div>
      </div>

      <div className="mt-6">
        <Tabs defaultValue="inventory">
          <TabsList>
            <TabsTrigger value="inventory">Current Inventory</TabsTrigger>
            <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
          </TabsList>
          <TabsContent value="inventory" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Inventory</CardTitle>
                <CardDescription>All products currently in stock</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="expiring" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Expiring Soon</CardTitle>
                <CardDescription>Products that will expire within 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpiringProductsTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="optimization" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Stock Optimization</CardTitle>
                <CardDescription>Suggested stock movements and placements</CardDescription>
              </CardHeader>
              <CardContent>
                <StockOptimization />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

