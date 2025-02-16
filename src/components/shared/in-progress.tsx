import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InProgressProps {
  title: string
  message?: string
}

export function InProgress({ 
  title, 
  message = "This page is currently under construction. Check back soon for updates!" 
}: InProgressProps) {
  return (
    <div className="container flex items-center justify-center min-h-[50vh]">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Clock className="h-6 w-6" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground">
          {message}
        </CardContent>
      </Card>
    </div>
  )
}