import { PackerOrderList } from "@/components/packer-order-list"
import { PackerStats } from "@/components/packer-stats"

export default function PackersPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Packers App</h1>
        <p className="text-muted-foreground">Process and pack orders efficiently</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-3">
          <PackerOrderList />
        </div>
        <div>
          <PackerStats />
        </div>
      </div>
    </div>
  )
}

