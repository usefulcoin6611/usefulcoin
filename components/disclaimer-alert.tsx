import { TriangleAlert } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function DisclaimerAlert() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800 rounded-lg p-6 shadow-custom-light">
        <TriangleAlert className="h-5 w-5 text-yellow-600" />
        <AlertDescription className="ml-8 text-base font-light">
          <span className="font-semibold">Important Disclaimer</span>
          <br />
          This roadmap is not a promise, commitment, or obligation regarding financial returns or profits. It&apos;s a
          guide for our journey to maximize charitable impact from creator rewards. Past charitable efforts do not
          guarantee future results, but our dedication to making a positive difference is unwavering.
        </AlertDescription>
      </Alert>
    </div>
  )
}
