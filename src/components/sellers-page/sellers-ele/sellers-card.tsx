import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type SellersCardProps = {
  title: string;
  value: string;
  desc: string;
  progress: number;
};

const SellersCard = ({ title, value, desc, progress }: SellersCardProps) => {
  return (
      <Card className="w-1/3 rounded-xl">
        <CardHeader className="pb-2">
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-4xl">{value}</CardTitle>
        </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              {desc}
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={progress} aria-label="25% increase" />
        </CardFooter>
      </Card>
  )
}

export default SellersCard