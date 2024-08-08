"use client"

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Define uma interface para os itens de dados
interface ChartDataItem {
  month: string;
  desktop: number;
  mobile: number;
}

// Configuração de cores e labels para o gráfico
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function LineGraph() {
  // Estado para armazenar os dados do gráfico com tipagem
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);

  // Função para buscar dados da API
  const fetchData = async () => {
    try {
      // Requisição para o endpoint da API
      const response = await fetch("http://localhost:5000/api/usuarios");
      const data: ChartDataItem[] = await response.json(); // Tipagem dos dados recebidos

      // Formatação dos dados no formato desejado
      const formattedData = data.map((item: ChartDataItem) => ({
        month: item.month, // Usando o mês em português diretamente
        desktop: item.desktop,
        mobile: item.mobile,
      }));

      // Atualiza o estado com os dados formatados
      setChartData(formattedData);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  // Hook de efeito para buscar dados quando o componente é montado
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card className="rounded-xl w-1/2">
      <CardHeader>
        <CardTitle>Grafico API</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData} // Dados dinâmicos
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} // Exibe apenas os três primeiros caracteres do mês
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
            <Line
              dataKey="mobile"
              type="natural"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-mobile)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Aumento de 2,5% esse mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Mostrando a quantidade de clientes nos ultimos 6 meses
        </div>
      </CardFooter>
    </Card>
  );
}
