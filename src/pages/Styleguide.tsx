/**
 * Styleguide page showcasing all shadcn/ui components and design tokens.
 * Comprehensive reference for the design system and component library.
 */
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Heading, Text } from '@/components/ui/typography';
import { StrategyForm } from '@/components/forms/StrategyForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Calendar } from '@/components/ui/calendar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';

export const Styleguide = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="mx-auto w-full max-w-6xl space-y-8 md:space-y-12 md:px-4">
        <div className="space-y-4">
          <Heading level={1}>Design System Styleguide</Heading>
          <Text variant="lead">
            A comprehensive reference for all shadcn/ui components and design tokens.
          </Text>
        </div>

        {/* Design Tokens */}
        <section className="space-y-4">
          <Heading level={2}>Design Tokens</Heading>
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>Primary color tokens used throughout the application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-primary"></div>
                  <Text variant="small" className="font-medium">
                    Primary
                  </Text>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-secondary"></div>
                  <Text variant="small" className="font-medium">
                    Secondary
                  </Text>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-destructive"></div>
                  <Text variant="small" className="font-medium">
                    Destructive
                  </Text>
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-muted"></div>
                  <Text variant="small" className="font-medium">
                    Muted
                  </Text>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <Heading level={2}>Typography</Heading>
          <Card>
            <CardHeader>
              <CardTitle>Text Styles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Text variant="lead">Lead text - larger and more prominent</Text>
              <Text>Default body text</Text>
              <Text variant="small">Small text for captions and labels</Text>
            </CardContent>
          </Card>
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <Heading level={2}>Buttons</Heading>
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
            <CardContent className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <HiOutlineClipboardDocument className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Accordion */}
        <section className="space-y-4">
          <Heading level={2}>Accordion</Heading>
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the other components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Alert */}
        <section className="space-y-4">
          <Heading level={2}>Alert</Heading>
          <div className="space-y-2">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>This is a default alert message.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>This is a destructive alert message.</AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Alert Dialog */}
        <section className="space-y-4">
          <Heading level={2}>Alert Dialog</Heading>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>

        {/* Avatar */}
        <section className="space-y-4">
          <Heading level={2}>Avatar</Heading>
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Badge */}
        <section className="space-y-4">
          <Heading level={2}>Badge</Heading>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="space-y-4">
          <Heading level={2}>Breadcrumb</Heading>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        {/* Calendar */}
        <section className="space-y-4">
          <Heading level={2}>Calendar</Heading>
          <Card>
            <CardContent className="pt-6">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </CardContent>
          </Card>
        </section>

        {/* Checkbox */}
        <section className="space-y-4">
          <Heading level={2}>Checkbox</Heading>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </section>

        {/* Collapsible */}
        <section className="space-y-4">
          <Heading level={2}>Collapsible</Heading>
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline">Toggle</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="rounded-md border p-4">This content is collapsible.</div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        {/* Command */}
        <section className="space-y-4">
          <Heading level={2}>Command</Heading>
          <Card>
            <CardContent className="pt-6">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>
        </section>

        {/* Context Menu */}
        <section className="space-y-4">
          <Heading level={2}>Context Menu</Heading>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Back</ContextMenuItem>
              <ContextMenuItem>Forward</ContextMenuItem>
              <ContextMenuItem>Reload</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Dialog */}
        <section className="space-y-4">
          <Heading level={2}>Dialog</Heading>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </section>

        {/* Drawer */}
        <section className="space-y-4">
          <Heading level={2}>Drawer</Heading>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </section>

        {/* Dropdown Menu */}
        <section className="space-y-4">
          <Heading level={2}>Dropdown Menu</Heading>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Form */}
        <section className="space-y-4">
          <Heading level={2}>Form</Heading>
          <Card>
            <CardHeader>
              <CardTitle>Form Example</CardTitle>
              <CardDescription>Example form using react-hook-form and Zod validation</CardDescription>
            </CardHeader>
            <CardContent>
              <StrategyForm
                onSubmit={async (data) => {
                  console.log('Form submitted:', data);
                }}
              />
            </CardContent>
          </Card>
        </section>

        {/* Hover Card */}
        <section className="space-y-4">
          <Heading level={2}>Hover Card</Heading>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@hovercard</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <Text className="text-sm font-semibold">@hovercard</Text>
                  <Text variant="small" className="text-muted-foreground">
                    The React Framework
                  </Text>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </section>

        {/* Input */}
        <section className="space-y-4">
          <Heading level={2}>Input</Heading>
          <div className="space-y-2">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input disabled placeholder="Disabled" />
          </div>
        </section>

        {/* Input OTP */}
        <section className="space-y-4">
          <Heading level={2}>Input OTP</Heading>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </section>

        {/* Label */}
        <section className="space-y-4">
          <Heading level={2}>Label</Heading>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </section>

        {/* Menubar */}
        <section className="space-y-4">
          <Heading level={2}>Menubar</Heading>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab</MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        {/* Navigation Menu */}
        <section className="space-y-4">
          <Heading level={2}>Navigation Menu</Heading>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Introduction</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Pagination */}
        <section className="space-y-4">
          <Heading level={2}>Pagination</Heading>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>

        {/* Popover */}
        <section className="space-y-4">
          <Heading level={2}>Popover</Heading>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <Text className="font-semibold">Dimensions</Text>
                <Text variant="small">Set the dimensions for the layer.</Text>
              </div>
            </PopoverContent>
          </Popover>
        </section>

        {/* Progress */}
        <section className="space-y-4">
          <Heading level={2}>Progress</Heading>
          <Progress value={33} className="w-[60%]" />
        </section>

        {/* Radio Group */}
        <section className="space-y-4">
          <Heading level={2}>Radio Group</Heading>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Resizable */}
        <section className="space-y-4">
          <Heading level={2}>Resizable</Heading>
          <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <Text variant="small">Panel 1</Text>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <Text variant="small">Panel 2</Text>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </section>

        {/* Scroll Area */}
        <section className="space-y-4">
          <Heading level={2}>Scroll Area</Heading>
          <ScrollArea className="h-32 w-48 rounded-md border p-4">
            <div className="space-y-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <Text key={i} variant="small">
                  Item {i + 1}
                </Text>
              ))}
            </div>
          </ScrollArea>
        </section>

        {/* Select */}
        <section className="space-y-4">
          <Heading level={2}>Select</Heading>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* Separator */}
        <section className="space-y-4">
          <Heading level={2}>Separator</Heading>
          <div>
            <div className="space-y-1">
              <Text className="text-sm font-medium">Radix Primitives</Text>
              <Text variant="small" className="text-muted-foreground">
                An open-source UI component library.
              </Text>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </section>

        {/* Sheet */}
        <section className="space-y-4">
          <Heading level={2}>Sheet</Heading>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </section>

        {/* Skeleton */}
        <section className="space-y-4">
          <Heading level={2}>Skeleton</Heading>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </section>

        {/* Slider */}
        <section className="space-y-4">
          <Heading level={2}>Slider</Heading>
          <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} className="w-[60%]" />
          <Text variant="small">Value: {sliderValue[0]}</Text>
        </section>

        {/* Switch */}
        <section className="space-y-4">
          <Heading level={2}>Switch</Heading>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </section>

        {/* Table */}
        <section className="space-y-4">
          <Heading level={2}>Table</Heading>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Tabs */}
        <section className="space-y-4">
          <Heading level={2}>Tabs</Heading>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>Make changes to your account here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text>Account settings content</Text>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text>Password settings content</Text>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Textarea */}
        <section className="space-y-4">
          <Heading level={2}>Textarea</Heading>
          <Textarea placeholder="Type your message here." />
        </section>

        {/* Toggle */}
        <section className="space-y-4">
          <Heading level={2}>Toggle</Heading>
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic">
              <Text>Italic</Text>
            </Toggle>
            <Toggle aria-label="Toggle bold" pressed>
              <Text>Bold</Text>
            </Toggle>
          </div>
        </section>

        {/* Toggle Group */}
        <section className="space-y-4">
          <Heading level={2}>Toggle Group</Heading>
          <ToggleGroup type="single">
            <ToggleGroupItem value="a" aria-label="Toggle italic">
              <Text>A</Text>
            </ToggleGroupItem>
            <ToggleGroupItem value="b" aria-label="Toggle bold">
              <Text>B</Text>
            </ToggleGroupItem>
            <ToggleGroupItem value="c" aria-label="Toggle underline">
              <Text>C</Text>
            </ToggleGroupItem>
          </ToggleGroup>
        </section>

        {/* Tooltip */}
        <section className="space-y-4">
          <Heading level={2}>Tooltip</Heading>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
              </TooltipTrigger>
              <TooltipContent>
                <Text>Add to library</Text>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </section>

        {/* Carousel */}
        <section className="space-y-4">
          <Heading level={2}>Carousel</Heading>
          <div className="w-full overflow-hidden px-4 md:px-0">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-4 md:p-6">
                          <Text className="text-xl md:text-2xl font-semibold">{index + 1}</Text>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>

        {/* Aspect Ratio */}
        <section className="space-y-4">
          <Heading level={2}>Aspect Ratio</Heading>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <div className="flex items-center justify-center h-full">
              <Text>16:9 Aspect Ratio</Text>
            </div>
          </AspectRatio>
        </section>
      </div>
    </div>
  );
};

// Named export for consistency
export default Styleguide;
