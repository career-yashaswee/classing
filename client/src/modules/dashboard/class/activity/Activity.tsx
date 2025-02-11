"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  LayoutGrid,
  List,
  Eye,
  Calendar,
  User,
  Activity,
  LogIn,
  ShoppingCart,
  UserPlus,
} from "lucide-react";
import React from "react"; // Import React

// Mock data for activities
const activities = [
  {
    id: 1,
    type: "Login",
    user: "John Doe",
    date: "2023-04-01",
    status: "Success",
  },
  {
    id: 2,
    type: "Purchase",
    user: "Jane Smith",
    date: "2023-04-02",
    status: "Completed",
  },
  {
    id: 3,
    type: "Signup",
    user: "Alice Johnson",
    date: "2023-04-03",
    status: "Success",
  },
  {
    id: 4,
    type: "Login",
    user: "Bob Wilson",
    date: "2023-04-04",
    status: "Failed",
  },
  {
    id: 5,
    type: "Purchase",
    user: "Eve Brown",
    date: "2023-04-05",
    status: "Pending",
  },
  {
    id: 6,
    type: "Signup",
    user: "Charlie Davis",
    date: "2023-04-06",
    status: "Success",
  },
];

const activityIcons = {
  Login: LogIn,
  Purchase: ShoppingCart,
  Signup: UserPlus,
};

export default function ActivityDashboard() {
  const [view, setView] = useState<"card" | "table">("card");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [groupBy, setGroupBy] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredActivities = activities.filter((activity) =>
    Object.values(activity).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedActivities = [...filteredActivities].sort((a, b) =>
    a[sortBy as keyof typeof a] > b[sortBy as keyof typeof b] ? 1 : -1
  );

  const groupedActivities =
    groupBy === "none"
      ? { "All Activities": sortedActivities }
      : sortedActivities.reduce((acc, activity) => {
          const key = activity[groupBy as keyof typeof activity];
          if (!acc[key]) acc[key] = [];
          acc[key].push(activity);
          return acc;
        }, {} as Record<string, typeof activities>);

  const paginatedActivities = Object.fromEntries(
    Object.entries(groupedActivities).map(([group, activities]) => [
      group,
      activities.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ),
    ])
  );

  const totalPages = Math.ceil(
    Object.values(groupedActivities).flat().length / itemsPerPage
  );

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-duotone-primary/10 to-duotone-secondary/10">
      <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-sm z-10 space-y-4 p-4 shadow-md rounded-b-lg">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center flex-grow max-w-md">
            <Input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-2 rounded-md border-duotone-primary/30 focus:border-duotone-primary focus:ring-duotone-primary"
            />
            <Button
              size="icon"
              variant="ghost"
              className="text-duotone-primary hover:bg-duotone-primary/10 transition-colors duration-200"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px] rounded-md border-duotone-secondary/30 focus:border-duotone-secondary focus:ring-duotone-secondary">
                <Calendar className="h-4 w-4 mr-2 text-duotone-secondary" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
            <Select value={groupBy} onValueChange={setGroupBy}>
              <SelectTrigger className="w-[140px] rounded-md border-duotone-primary/30 focus:border-duotone-primary focus:ring-duotone-primary">
                <Activity className="h-4 w-4 mr-2 text-duotone-primary" />
                <SelectValue placeholder="Group by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant={view === "card" ? "default" : "outline"}
              onClick={() => setView("card")}
              size="icon"
              className={`rounded-md transition-colors duration-200 ${
                view === "card"
                  ? "bg-duotone-primary text-white hover:bg-duotone-primary/90"
                  : "text-duotone-primary hover:bg-duotone-primary/10"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "table" ? "default" : "outline"}
              onClick={() => setView("table")}
              size="icon"
              className={`rounded-md transition-colors duration-200 ${
                view === "table"
                  ? "bg-duotone-secondary text-white hover:bg-duotone-secondary/90"
                  : "text-duotone-secondary hover:bg-duotone-secondary/10"
              }`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-auto p-4">
        {isLoading ? (
          <LoadingSkeleton view={view} />
        ) : (
          Object.entries(paginatedActivities).map(([group, activities]) => (
            <div key={group} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-duotone-primary to-duotone-secondary bg-clip-text text-transparent">
                {group}
              </h3>
              {view === "card" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              ) : (
                <ActivityTable activities={activities} />
              )}
            </div>
          ))
        )}
      </div>

      <div className="sticky bottom-0 bg-white bg-opacity-80 backdrop-blur-sm z-10 p-4 shadow-md rounded-t-lg">
        <div className="flex justify-center items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-md border-duotone-primary/30 text-duotone-primary hover:bg-duotone-primary/10 transition-colors duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-duotone-primary font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded-md border-duotone-secondary/30 text-duotone-secondary hover:bg-duotone-secondary/10 transition-colors duration-200"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

const ActivityCard = ({ activity }: { activity: (typeof activities)[0] }) => {
  const IconComponent =
    activityIcons[activity.type as keyof typeof activityIcons] || Activity;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div
                className={`p-2 rounded-full ${
                  activity.type === "Login"
                    ? "bg-duotone-primary/20"
                    : activity.type === "Purchase"
                    ? "bg-duotone-secondary/20"
                    : "bg-gray-200"
                }`}
              >
                <IconComponent
                  className={`h-5 w-5 ${
                    activity.type === "Login"
                      ? "text-duotone-primary"
                      : activity.type === "Purchase"
                      ? "text-duotone-secondary"
                      : "text-gray-600"
                  }`}
                />
              </div>
              <h4 className="font-semibold ml-2 text-gray-800">
                {activity.type}
              </h4>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-duotone-primary transition-colors duration-200"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600 flex items-center">
              <User className="h-4 w-4 mr-2 text-duotone-primary" />
              {activity.user}
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-duotone-secondary" />
              {activity.date}
            </p>
            <p className="text-sm font-medium flex items-center">
              <Activity className="h-4 w-4 mr-2 text-gray-500" />
              {activity.status}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ActivityTable = ({ activities }: { activities: typeof activities }) => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="bg-gradient-to-r from-duotone-primary/10 to-duotone-secondary/10">
          <TableHead className="text-duotone-primary">Type</TableHead>
          <TableHead className="text-duotone-secondary">User</TableHead>
          <TableHead className="text-duotone-primary">Date</TableHead>
          <TableHead className="text-duotone-secondary">Status</TableHead>
          <TableHead className="text-gray-500">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow
            key={activity.id}
            className="hover:bg-gray-50 transition-colors duration-200"
          >
            <TableCell className="font-medium text-duotone-primary">
              <div className="flex items-center">
                {React.createElement(
                  activityIcons[activity.type as keyof typeof activityIcons] ||
                    Activity,
                  {
                    className: "h-4 w-4 mr-2",
                  }
                )}
                {activity.type}
              </div>
            </TableCell>
            <TableCell className="text-duotone-secondary">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {activity.user}
              </div>
            </TableCell>
            <TableCell className="text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {activity.date}
              </div>
            </TableCell>
            <TableCell className="text-gray-600">
              <div className="flex items-center">
                <Activity className="h-4 w-4 mr-2" />
                {activity.status}
              </div>
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-duotone-primary transition-colors duration-200"
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const LoadingSkeleton = ({ view }: { view: "card" | "table" }) => {
  return view === "card" ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="overflow-hidden shadow-md rounded-lg">
          <CardContent className="p-4">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>
      ))}
    </div>
  ) : (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Skeleton className="h-6 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-6 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-6 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-6 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-6 w-full" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(6)].map((_, i) => (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="h-4 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
