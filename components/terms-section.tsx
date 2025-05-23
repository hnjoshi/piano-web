import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function TermsSection() {
  return (
    <section className="bg-muted/50 dark:bg-muted/10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8 sm:text-4xl">Terms & Conditions</h2>

        <Card className="max-w-3xl mx-auto overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-10 w-10 text-primary opacity-80" />
            </div>

            <p className="text-center text-muted-foreground mb-6">
              Please read and understand the following terms before enrolling in our music lessons:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">1.</span>
                <p>Fees will not be transferred or refunded in any case.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">2.</span>
                <p>Duration of a demo class will be 20-25 mins and it's free of cost.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">3.</span>
                <p>In any dispute, Jurisdiction will be Bharuch only.</p>
              </li>
            </ul>

            <p className="text-center text-sm text-muted-foreground mt-6">
              By booking a lesson or enrolling in our programs, you agree to these terms and conditions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
