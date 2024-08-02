import Salescard from "./sales-card";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <Salescard subtitle="CS" name="Cristina Silva" contact='cristinasilva@gmail.com' value="+R$59,90"/>
      <Salescard subtitle="AN" name="Alberto Neto" contact='albertoneto@gmail.com' value="+R$34,90"/>
      <Salescard subtitle="LM" name="Leandro Macedo" contact='leomacedo@gmail.com' value="+R$99,90"/>
      <Salescard subtitle="CE" name="Carlos Eduardo" contact='carlos__eduardo@gmail.com' value="+R$9,90"/>
      <Salescard subtitle="YA" name="Yury Azevedo" contact='yuriazevedo_@gmail.com' value="+R$4,90"/>
    </div>
  );
} 