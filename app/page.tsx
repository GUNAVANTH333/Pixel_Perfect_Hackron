import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Box, BarChart3, Truck } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Quick-Commerce Warehouse Management</h1>
        <p className="mt-4 text-lg text-muted-foreground">Efficient warehouse operations for 10-15 minute deliveries</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Box className="mb-2 h-8 w-8 text-primary" />
            <CardTitle>Packers App</CardTitle>
            <CardDescription>Real-time order processing and packing management</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              View incoming orders, track packing tasks, and update order statuses in real-time.
            </p>
            <Button asChild className="w-full">
              <Link href="/packers">
                Access Packers App <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BarChart3 className="mb-2 h-8 w-8 text-primary" />
            <CardTitle>Manager's Dashboard</CardTitle>
            <CardDescription>Performance metrics and warehouse operations overview</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Monitor order statuses, analyze packer efficiency, and optimize warehouse workflows.
            </p>
            <Button asChild className="w-full">
              <Link href="/dashboard">
                View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Truck className="mb-2 h-8 w-8 text-primary" />
            <CardTitle>Logistics & Inventory</CardTitle>
            <CardDescription>Stock management and logistics optimization</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Track inventory, scan barcodes, and manage product placement for optimal efficiency.
            </p>
            <Button asChild className="w-full">
              <Link href="/inventory">
                Manage Inventory <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

