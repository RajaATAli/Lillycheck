import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Header  from "../components/ui/header"

export default function Dashboard() {
  const [progress, setProgress] = React.useState(0);
  const [clickedCards, setClickedCards] = useState(0);
  const totalCards = 3; // Since you have 3 cards in your table

  const [checkedBoxes, setCheckedBoxes] = useState({
    "aws-access": false,
    "cortex-access": false,
    "backstage-access": false,
  });

  const handleCardClick = (id) => {
    if (!checkedBoxes[id]) {
      setCheckedBoxes((prev) => ({ ...prev, [id]: true }));
      const newClickedCards = clickedCards + 1;
      setClickedCards(newClickedCards);
      const newProgress = (newClickedCards / totalCards) * 100;
      setProgress(newProgress);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Orders</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header subtitle = "Employee Dashboard"/>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="completed" className="hidden sm:flex">
                  Completed
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Access Request
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <div className="flex flex-row gap-4">
                <Card className="card">
                  <CardHeader>
                    <CardTitle>Onboarding Task List</CardTitle>
                    <CardDescription>
                      Speed up your career success with our LillyCheck
                      Onboarding Tasks Manager!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                              <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Task Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">
                              Average Completion Time (Hr)
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Mentor
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Created at
                            </TableHead>
                            <TableHead>
                              <span className="sr-only">Actions</span>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              {!checkedBoxes["aws-access"] ? (
                                <Checkbox
                                  id="aws-access"
                                  onCheckedChange={() =>
                                    handleCardClick("aws-access")
                                  }
                                />
                              ) : (
                                <span>✓</span> // You can replace this with an icon or any other indicator
                              )}
                            </TableCell>
                            <TableCell className="font-medium">
                              AWS Access
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">Pending</Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              5 hours
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              Cole Thomas
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-07-12 10:42 AM
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              {!checkedBoxes["cortex-access"] ? (
                                <Checkbox
                                  id="cortex-access"
                                  onCheckedChange={() =>
                                    handleCardClick("cortex-access")
                                  }
                                />
                              ) : (
                                <span>✓</span>
                              )}
                            </TableCell>
                            <TableCell className="font-medium">
                              CORTEX Access
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">Active</Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              336 Hours
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              Nathan Morin
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-10-18 03:21 PM
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              {!checkedBoxes["backstage-access"] ? (
                                <Checkbox
                                  id="backstage-access"
                                  onCheckedChange={() =>
                                    handleCardClick("backstage-access")
                                  }
                                />
                              ) : (
                                <span>✓</span>
                              )}
                            </TableCell>
                            <TableCell className="font-medium">
                              Backstage Access
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">Active</Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              400 hours
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              Tim Coleman
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              2023-11-29 08:15 AM
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="text-xs text-muted-foreground">
                      Showing <strong>1-3</strong> of <strong>3</strong> tasks
                    </div>
                  </CardFooter>
                </Card>
                <div className="progress-container">
                  <h3 className="text-lg  mb-2">Redeem Inspire Points</h3>
                  <div className="vertical-progress-container">
                    <div className="vertical-progress">
                      <Progress
                        value={progress}
                        className="w-full"
                        indicatorColor="#D52B1E"
                        milestones={[
                          { value: 0, label: "Start" },
                          { value: 25, label: "25 " },
                          { value: 50, label: "50" },
                          { value: 75, label: "75" },
                          { value: 100, label: "100" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
