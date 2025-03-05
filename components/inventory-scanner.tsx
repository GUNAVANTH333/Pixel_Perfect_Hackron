"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { Barcode, Camera, Plus, Minus, Check } from "lucide-react"

export function InventoryScanner() {
  const [barcode, setBarcode] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isScanning, setIsScanning] = useState(false)
  const [scanSuccess, setScanSuccess] = useState(false)
  const [productInfo, setProductInfo] = useState<null | {
    name: string
    sku: string
    currentStock: number
  }>(null)
  const scannerRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Reset scan success state after 2 seconds
  useEffect(() => {
    if (scanSuccess) {
      const timer = setTimeout(() => {
        setScanSuccess(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [scanSuccess])

  const handleScan = () => {
    if (!barcode) {
      toast({
        title: "Error",
        description: "Please enter a barcode",
        variant: "destructive",
      })
      return
    }

    // Simulate product lookup
    const productDatabase = {
      "7891234567890": { name: "Organic Bananas", sku: "FRSH-BAN-ORG", currentStock: 45 },
      "5901234567890": { name: "Whole Milk 1L", sku: "DAIRY-MILK-1L", currentStock: 32 },
      "4801234567890": { name: "Sourdough Bread", sku: "BAKERY-BRD-SDG", currentStock: 18 },
    }

    const product = productDatabase[barcode as keyof typeof productDatabase]

    if (product) {
      setProductInfo(product)

      toast({
        title: "Inventory Updated",
        description: `${product.name} (${barcode}) quantity updated by ${quantity}`,
      })
    } else {
      toast({
        title: "Product Not Found",
        description: `No product found with barcode ${barcode}`,
        variant: "destructive",
      })
    }
  }

  const simulateScan = () => {
    setIsScanning(true)

    // Animate scanner line
    if (scannerRef.current) {
      scannerRef.current.style.animation = "none"
      void scannerRef.current.offsetHeight // Trigger reflow
      scannerRef.current.style.animation = "scanAnimation 1.5s infinite"
    }

    // Simulate a barcode scan after 2 seconds
    setTimeout(() => {
      const fakeBarcodes = ["7891234567890", "5901234567890", "4801234567890"]
      const randomBarcode = fakeBarcodes[Math.floor(Math.random() * fakeBarcodes.length)]
      setBarcode(randomBarcode)
      setIsScanning(false)
      setScanSuccess(true)

      // Simulate product lookup
      const productDatabase = {
        "7891234567890": { name: "Organic Bananas", sku: "FRSH-BAN-ORG", currentStock: 45 },
        "5901234567890": { name: "Whole Milk 1L", sku: "DAIRY-MILK-1L", currentStock: 32 },
        "4801234567890": { name: "Sourdough Bread", sku: "BAKERY-BRD-SDG", currentStock: 18 },
      }

      setProductInfo(productDatabase[randomBarcode as keyof typeof productDatabase])

      toast({
        title: "Barcode Scanned",
        description: `Scanned barcode: ${randomBarcode}`,
      })
    }, 2000)
  }

  return (
    <Tabs defaultValue="manual" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="manual">Manual Entry</TabsTrigger>
        <TabsTrigger value="scanner">Barcode Scanner</TabsTrigger>
      </TabsList>

      <TabsContent value="manual" className="mt-4 space-y-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="barcode">Product Barcode</Label>
            <Input
              id="barcode"
              placeholder="Enter barcode number"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="quantity">Quantity Change</Label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => setQuantity(Math.max(quantity - 1, -100))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 0)}
                className="mx-2 text-center"
              />
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => setQuantity(Math.min(quantity + 1, 100))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Button onClick={handleScan} className="w-full">
          <Barcode className="mr-2 h-4 w-4" />
          Update Inventory
        </Button>

        {productInfo && (
          <div className="mt-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{productInfo.name}</h3>
                <p className="text-sm text-muted-foreground">SKU: {productInfo.sku}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Current Stock: {productInfo.currentStock}</p>
                <p className="text-sm font-medium">New Stock: {productInfo.currentStock + quantity}</p>
              </div>
            </div>
          </div>
        )}
      </TabsContent>

      <TabsContent value="scanner" className="mt-4">
        <style jsx global>{`
          @keyframes scanAnimation {
            0% { top: 0; }
            50% { top: 100%; }
            100% { top: 0; }
          }
        `}</style>

        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8">
          {isScanning ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-48 w-full rounded bg-muted overflow-hidden">
                <div
                  ref={scannerRef}
                  className="absolute left-0 right-0 h-0.5 bg-primary"
                  style={{
                    animation: "scanAnimation 1.5s infinite",
                    boxShadow: "0 0 8px 2px rgba(var(--primary), 0.5)",
                  }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground">Scanning...</p>
            </div>
          ) : scanSuccess ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-center font-medium">Scan Successful!</p>
            </div>
          ) : (
            <>
              <Camera className="h-12 w-12 text-muted-foreground" />
              <div className="text-center">
                <h3 className="text-lg font-medium">Scan Barcode</h3>
                <p className="text-sm text-muted-foreground">Position the barcode within the scanner area</p>
              </div>
              <Button onClick={simulateScan}>Start Scanning</Button>
            </>
          )}
        </div>

        {barcode && productInfo && (
          <div className="mt-4 rounded-lg border p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{productInfo.name}</h3>
                <p className="text-sm text-muted-foreground">SKU: {productInfo.sku}</p>
                <p className="text-sm text-muted-foreground">Barcode: {barcode}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Current Stock: {productInfo.currentStock}</p>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="scan-quantity">Quantity Change</Label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={() => setQuantity(Math.max(quantity - 1, -100))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  id="scan-quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 0)}
                  className="mx-2 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={() => setQuantity(Math.min(quantity + 1, 100))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button onClick={handleScan} className="mt-4 w-full">
              Update Inventory
            </Button>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}

