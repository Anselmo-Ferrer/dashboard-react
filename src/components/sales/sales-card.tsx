import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type SalescardProps = {
  subtitle: string;
  name: string;
  contact: string;
  value: string;
};

const Salescard = ({ subtitle, name, contact, value }: SalescardProps) => {
  return (
    <div className="flex items-center">
        <Avatar className="h-9 w-9 bg-muted rounded-full flex items-center justify-center">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>{subtitle}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground">{contact}</p>
        </div>
        <div className="ml-auto font-medium">{value}</div>
      </div>
  )
}

export default Salescard