import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
import { Button } from "@/components/ui/button"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import logo from '../images/logo.png';
import profile from '../images/profile.jpg'

interface HeaderProps {
    subtitle: string;
  }

const Header: React.FC<HeaderProps> = ({ subtitle }) => {
  return (
    <header className="sticky top-0 z-40 flex h-[90px] items-center gap-4 border-b text-white bg-customRed px-4 sm:static sm:border-0  sm:px-6">
        <div style={{ marginLeft: '10px'}}>
          <div className="mb-2" style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
            <Image src={logo} alt="Logo Image" width={120} height={120} />
            <div className="mb-2" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <h1 style={{ fontSize: '2.0rem', marginLeft: '-10px' }}>Check</h1>
            <p className="text-xl"style={{ marginLeft: '20px', marginBottom: '6px' }} >{subtitle}</p> 
            </div>
           </div>
        </div>
          <div style={{ marginLeft: 'auto', marginRight: '20px' }}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src={profile}
                  width={300}
                  height={300}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </header>
  );
};

export default Header;