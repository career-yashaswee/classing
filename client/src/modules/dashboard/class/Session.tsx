"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpDown, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { SessionCard } from "./session/SessionCard";
import { TSession } from "@/types/session";

// Mock data (replace with actual data fetching in a real application)
const mockData = Array(20)
  .fill(null)
  .map((_, index) => ({
    _id: `67b1a26a03ad827c5f43b3${index.toString().padStart(2, "0")}`,
    title: `Introduction to ${
      ["Algebra", "Geometry", "Calculus", "Statistics"][index % 4]
    }`,
    subject: "Mathematics",
    description: `Understanding the basics of ${
      ["algebra", "geometry", "calculus", "statistics"][index % 4]
    }, including key concepts and problem-solving techniques.`,
    duration: 45 + (index % 3) * 15,
    course: `Class ${8 + (index % 3)} Math`,
    class: `${8 + (index % 3)}`,
    topic_tags: ["math", "equations", "variables"],
    focus: ["conceptual", "practical", "theoretical"][index % 3],
    session_start_time: `0${1 + (index % 3)}:${
      (index * 7) % 60 < 10 ? "0" : ""
    }${(index * 7) % 60} PM`,
    session_start_date: new Date(2025, 1, 16 + index).toISOString(),
    createdAt: new Date(2025, 1, 16).toISOString(),
    updatedAt: new Date(2025, 1, 16).toISOString(),
  }));

export default function Session() {
  const [data, setData] = useState(mockData);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [groupBy, setGroupBy] = useState("None");
  const [view, setView] = useState("card");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter, sort, and group data
  const processedData = data
    .filter(
      (item) =>
        (searchQuery === "" ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filter === "All" || item.class === filter)
    )
    .sort((a, b) => {
      if (sort === "title")
        return sortDirection === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      if (sort === "date")
        return sortDirection === "asc"
          ? new Date(a.session_start_date).getTime() -
              new Date(b.session_start_date).getTime()
          : new Date(b.session_start_date).getTime() -
              new Date(a.session_start_date).getTime();
      if (sort === "duration")
        return sortDirection === "asc"
          ? a.duration - b.duration
          : b.duration - a.duration;
      return 0;
    });

  // Group data
  const groupedData =
    groupBy === "None"
      ? { All: processedData }
      : processedData.reduce((acc: { [key: string]: TSession[] }, item) => {
          const key = item[groupBy as keyof typeof item];
          if (!acc[key]) acc[key] = [];
          acc[key].push(item);
          return acc;
        }, {});

  // Paginate data
  const pageCount = Math.ceil(processedData.length / itemsPerPage);
  const paginatedData = Object.entries(groupedData).reduce(
    (acc, [key, value]) => {
      const pageCount = Math.ceil(value.length / itemsPerPage);
      if (currentPage > pageCount) return acc;
      acc[key] = value.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
      return acc;
    },
    {}
  );

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2 w-full md:w-auto mb-4 md:mb-0">
            <Search className="text-primary" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64"
            />
          </div>
          <div className="flex flex-wrap items-center space-x-2">
            <Select value={groupBy} onValueChange={setGroupBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Group By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="None">No Grouping</SelectItem>
                <SelectItem value="subject">Subject</SelectItem>
                <SelectItem value="class">Class</SelectItem>
                <SelectItem value="focus">Focus</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Classes</SelectItem>
                <SelectItem value="8">Class 8</SelectItem>
                <SelectItem value="9">Class 9</SelectItem>
                <SelectItem value="10">Class 10</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={toggleSortDirection}>
              <ArrowUpDown
                className={`transform transition-transform ${
                  sortDirection === "desc" ? "rotate-180" : ""
                }`}
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setView(view === "card" ? "table" : "card")}
            >
              {view === "card" ? (
                <List className="text-primary" />
              ) : (
                <Grid className="text-primary" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          Object.entries(paginatedData).map(([group, items]) => (
            <div key={group} className="mb-8">
              {groupBy !== "None" && (
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  {group}
                </h2>
              )}
              {view === "card" ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <AnimatePresence>
                    {(items as TSession[]).map((item) => (
                      <SessionCard
                        _id={item._id}
                        key={item._id}
                        image={item.image}
                        title={item.title}
                        subject={item.subject}
                        description={item.description}
                        duration={item.duration}
                        course={item.course}
                        sClass={item.sClass}
                        topic_tags={item.topic_tags}
                        focus={item.focus}
                        session_start_date={item.session_start_date}
                        session_start_time={item.session_start_time}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <TableView items={items as TSession[]} />
              )}
            </div>
          ))
        )}
      </main>

      <footer className="sticky bottom-0 z-10 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, processedData.length)} of{" "}
            {processedData.length}
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageCount))
              }
              disabled={currentPage === pageCount}
            >
              Next
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TableView({ items }: { items: TSession[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <AnimatePresence>
          {items.map((item) => (
            <motion.tr
              key={item._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hover:bg-secondary/20 transition-colors duration-200"
            >
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.duration} mins</TableCell>
              <TableCell>Class {item.sClass}</TableCell>
              <TableCell>
                {new Date(item.session_start_date).toLocaleDateString()}
              </TableCell>
            </motion.tr>
          ))}
        </AnimatePresence>
      </TableBody>
    </Table>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="h-48 animate-pulse bg-secondary/20 rounded-lg"
          ></div>
        ))}
    </div>
  );
}
