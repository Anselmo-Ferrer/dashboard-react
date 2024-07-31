import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TabsContent } from "@radix-ui/react-tabs"

function SellersPage() {
  return (
    <TabsContent value="sellers" className="space-y-4">
            <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Cliente</TableHead>
                            <TableHead className="hidden sm:table-cell">
                              Tipo
                            </TableHead>
                            <TableHead className="hidden sm:table-cell">
                              Status
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Data
                            </TableHead>
                            <TableHead className="text-right">Quantia</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>

                          

                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Olivia Smith</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                olivia@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Reembolso
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="outline">
                                Rejeitado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="text-right">R$150.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Noah Williams</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                noah@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              inscricao
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Realizado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-06-25
                            </TableCell>
                            <TableCell className="text-right">R$350.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Emma Brown</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                emma@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Sale
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Realizado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              26-06-2024
                            </TableCell>
                            <TableCell className="text-right">R$450.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Liam Johnson</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                liam@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Sale
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Realizado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-06-23
                            </TableCell>
                            <TableCell className="text-right">R$250.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Liam Johnson</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                liam@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Venda
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Realizado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-06-23
                            </TableCell>
                            <TableCell className="text-right">R$250.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Olivia Smith</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                olivia@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Reembolso
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="outline">
                                Rejeitado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-06-24
                            </TableCell>
                            <TableCell className="text-right">R$150.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Emma Brown</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                emma@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Venda
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Realizado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              26-06-2024
                            </TableCell>
                            <TableCell className="text-right">R$450.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Emma Brown</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                emma@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Venda
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Realizado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              26-06-2024
                            </TableCell>
                            <TableCell className="text-right">R$450.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Emma Brown</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                emma@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Venda
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Realizado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              26-06-2024
                            </TableCell>
                            <TableCell className="text-right">R$450.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="font-medium">Emma Brown</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                emma@example.com
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              Venda
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              <Badge className="text-xs" variant="secondary">
                                Realizado
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              26-06-2024
                            </TableCell>
                            <TableCell className="text-right">R$450.00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
    </TabsContent>
  )
}

export default SellersPage