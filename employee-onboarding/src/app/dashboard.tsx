import React, { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress";
import Header  from "../components/ui/header"

export default function Dashboard() {
  const [progress, setProgress] = React.useState(50);


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
                    Speed up your career success with our LillyCheck Onboarding Tasks Manager!
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
                            Average Completion Time
                          </TableHead>
                          <TableHead className="hidden md:table-cell">Mentor</TableHead>
                          <TableHead className="hidden md:table-cell">Created at</TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableRow expandableContent=
{<div id='AccessText'>Slack is an essential tool for modern teams, providing a centralized platform for communication and collaboration. It simplifies the way teams work together by offering a range of features. Here's a detailed breakdown: 
  <br></br>
  <br></br>
  - <b>Digital Workspace:</b> Slack serves as a virtual space where teams can communicate and collaborate.
  <br></br>
  - <b>Communication Hub:</b> It consolidates all forms of team communication into one accessible platform.
  <br></br>
  - <b>Collaboration Tool:</b> Teams can work together on projects, share files, and manage tasks efficiently.
  <br></br>
  - <b>Integration-Friendly:</b> Slack can integrate with other tools like email and calendars to streamline workflows.
  <br></br>
  <b>Accessibility:</b> It's accessible from anywhere, which is crucial for remote work and staying connected.
  <br></br>
  <b>Features:</b> The platform offers direct messaging, group channels, video calls, and more to boost productivity.
  <br></br>
  <br></br>
  To gain access to Slack, <a href='https://slack.com/' target="_blank">please click here.</a>
  <br></br>
  <br></br>
  Here is a video demo of Slack: <iframe width="560" height="315" src="https://www.youtube.com/embed/o3HJuPaITWk?si=ks0T6OQXGPJBC5-Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>}>
  <TableCell className="hidden sm:table-cell">
    <Checkbox id="slack-access" />
  </TableCell>
  <TableCell className="font-medium">Slack Access</TableCell>
  <TableCell>
    <Badge variant="outline">Pending</Badge>
  </TableCell>
  <TableCell className="hidden md:table-cell">10 hours</TableCell>
  <TableCell className="hidden md:table-cell">John Smith</TableCell>
  <TableCell className="hidden md:table-cell">2024-03-12 2:42 AM</TableCell>
  <TableCell>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
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
<TableRow expandableContent=
{<div id='AccessText'> Jira is a versatile tool that helps teams stay organized and aligned with their goals, making it a popular choice for enhancing productivity and transparency in projects. 
  <br></br>
  <br></br>
  - <b>Project Management Tool:</b> Designed for agile project management and issue tracking.
  <br></br>
  - <b>Agile Methodologies:</b> Supports sprints, Scrum, and Kanban boards.
  <br></br>
  - <b>Issue Tracking:</b> Manages bugs, feature requests, and tasks.
  <br></br>
  - <b>Variants:</b> Includes JIRA Software, Service Management, Align, and Work Management.
  <br></br>
  <b>Transparency and Productivity:</b> Enhances project visibility and team efficiency.
  <br></br>
  <br></br>
  JIRA is essentially a tool that helps teams organize, track, and manage their work more effectively.
  <br></br>
  <br></br>
  To gain access to JIRA, please <a href='https://www.atlassian.com/software/jira' target="_blank">click here</a>.
  <br></br>
  <br></br>
  Here is a video demo of JIRA: <iframe width="560" height="315" src="https://www.youtube.com/embed/uM_m6EzMg3k?si=IGrYUw-F62zTfHgv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>}>
  <TableCell className="hidden sm:table-cell">
    <Checkbox id="jira-access" />
  </TableCell>
  <TableCell className="font-medium">JIRA Access</TableCell>
  <TableCell>
    <Badge variant="outline">Pending</Badge>
  </TableCell>
  <TableCell className="hidden md:table-cell">7 hours</TableCell>
  <TableCell className="hidden md:table-cell">Jack Sparrow</TableCell>
  <TableCell className="hidden md:table-cell">2023-08-10 10:46 AM</TableCell>
  <TableCell>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
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
                      <TableBody>
                        <TableRow expandableContent=
                        {<div id='AccessText'>GitHub is a web-based platform that hosts Git repositories. 
                        It allows developers to store their code, track changes, and collaborate with others. 
                        Key features include: 
                          <br></br>
                          <br></br>
                          - <b>Git:</b> A system to manage code history.
                          <br></br>
                          - <b>Repositories:</b> Online folders for project files.
                          <br></br>
                          - <b>Forking:</b> Copying a repo to make changes without affecting the original.
                          <br></br>
                          - <b>Pull Requests:</b> Proposing changes to someone else’s project.
                          <br></br>
                          <br></br>
                          It’s a tool for developers and non-developers alike to work together on projects. GitHub simplifies sharing and building upon each other’s work.
                          <br></br>
                          <br></br>
                          To gain access to GitHub <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target="_blank">CLICK HERE</a>
                          <br></br>
                          <br></br>
                          Then request specific access to needed repositories.
                          <br></br>
                          <br></br>
                          Here is a video demo of GitHub<iframe width="560" height="315" src="https://www.youtube.com/embed/iv8rSLsi1xo?si=7PW-2vxbaCRkSBqf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>}>
                          <TableCell className="hidden sm:table-cell">
                            <Checkbox id="github-access" />
                          </TableCell>
                          <TableCell className="font-medium">GitHub Access</TableCell>
                          <TableCell>
                            <Badge variant="outline">Pending</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">5 hours</TableCell>
                          <TableCell className="hidden md:table-cell">Cole Thomas</TableCell>
                          <TableCell className="hidden md:table-cell">2023-07-12 10:42 AM</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
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
                        <TableRow expandableContent=
                        {<div id='AccessText'>Cortex is Lilly's internally developed infrastructure AI backbone. 
                          It provides a platform for AI, observability, and data extraction services. The platform
                          approach adopted by Lilly's Software Product Engineering (SPE) organization aims to enable 
                          scalability, reusability, self-service, and interoperability. 
                          <br></br>
                          <br></br>
                          - <b>LLM Models:</b> Cortex provides access to individual models if needed.
                          <br></br>
                          - <b>RAG Pipeline:</b> Cortex has a premade RAG Pipeline that can be used in projects requiering ingestion.            
                          <br></br>
                          <br></br>
                          It’s a tool for developers to keep AI centralized and control access to all things AI. 
                          <br></br>
                          <br></br>
                          To gain access to Cortex <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target="_blank">CLICK HERE</a>
                          <br></br>
                          <br></br>
                          Specific use base architecture may be needed to gain full access to Cortex.
                          <br></br>
                          <br></br>
                          Here is a video demo of Cortex<a id='AccessLink' href='https://www.maggotdrowning.com/forums/media/fat-squirrel-jpg.15818/full' target="_blank" > CLICK HERE</a></div>}>
                      
                          <TableCell className="hidden sm:table-cell">
                            <Checkbox id="cortex-access" />
                          </TableCell>
                          <TableCell className="font-medium">CORTEX Access
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">Active</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">336 Hours</TableCell>
                          <TableCell className="hidden md:table-cell">Nathan Morin</TableCell>
                          <TableCell className="hidden md:table-cell">2023-10-18 03:21 PM</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
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
                        <TableRow expandableContent=
                         {<div id='AccessText'> Backstage is Lilly's internal plaform to catalog and create reusable
                          software assets, such as API's, components, and templates. It is designed to help teams 
                          across Tech@Lilly leverage these reusable templates in their projects, enhancing operational 
                          efficiency and developer productivity. The platform is integrated with GitHub, ServiceNow, 
                          and EDB, and offers opportunities for better integration in the future.
                          <br></br>
                          <br></br>
                          - <b>APIs:</b> Backstage has access to reusable API templates.
                          <br></br>
                          - <b>Documentation:</b> Lists documentations through TechDocs.
                          <br></br>
                          <br></br>
                          It’s a tool for developers to accelerate development.
                          <br></br>
                          <br></br>
                          To gain access to Backstage <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target="_blank">CLICK HERE</a>
                          <br></br>
                          <br></br>
                          Here is a video demo of Backstage<a id='AccessLink' href='https://www.maggotdrowning.com/forums/media/fat-squirrel-jpg.15818/full' target="_blank" > CLICK HERE</a></div>}>
                          <TableCell className="hidden sm:table-cell">
                            <Checkbox id="backstage-access" />
                          </TableCell>
                          <TableCell className="font-medium">Backstage Access</TableCell>
                          <TableCell>
                            <Badge variant="outline">Active</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">400 hours</TableCell>
                          <TableCell className="hidden md:table-cell">Tim Coleman</TableCell>
                          <TableCell className="hidden md:table-cell">2023-11-29 08:15 AM</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
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
                        

<TableRow expandableContent=
{<div id='AccessText'>CATS serves as a pivotal tool for accelerating the development and migration of web applications to the cloud. Spearheaded by the SPE Tech and Platform team, CATS is built using Open Source and AWS services that are designed to make your job as a developer as easy as possible. This platform is tailored to modernize operational workflows, reduce costs, and significantly diminish deployment timelines. Some features of CATS are: 
  <br></br>
  <br></br>
  - <b>Azure AD Single Sign-On:</b> CATS streamlines your authentication process by offering seamless access management across your applications through integration with Azure Active Directory. This ensures a frictionless sign-on experience, enhancing productivity and security.
  <br></br>
  - <b>Active Directory Authorization:</b> With CATS, you gain simple and fine-tuned control over user permissions, ensuring secure and appropriate access to resources. Our platform enables precise management of access rights, bolstering your security posture.
  <br></br>
  - <b>Opinionated Automation:</b> Transform your deployment cycles from weeks to hours with CATS's highly opinionated automation strategies. Our platform automates your workflows, allowing for swift and efficient application deployment.
  <br></br>
  <br></br>
  To gain access to CATS, please <a href='https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat' target="_blank">click here</a>
  <br></br>
  <br></br>
  Here is a video demo of CATS:<a id='AccessLink' href='https://www.purina.co.nz/articles/cats/behaviour/common-questions/videos' target="_blank" > please click here.</a></div>}>
  <TableCell className="hidden sm:table-cell">
    <Checkbox id="cats-access" />
  </TableCell>
  <TableCell className="font-medium">CATS Access</TableCell>
  <TableCell>
                            <Badge variant="outline">Pending</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">5 hours</TableCell>
                          <TableCell className="hidden md:table-cell">Cole Thomas</TableCell>
                          <TableCell className="hidden md:table-cell">2023-07-12 10:42 AM</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
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
                <h3 className="text-lg font-bold mb-2">Redeem Points</h3>
                <Progress value={progress} className="w-full" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

      </main>
    </div>
  </div>
  )
}