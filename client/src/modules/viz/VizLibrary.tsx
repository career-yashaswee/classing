"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookmarkPlus,
  ExternalLink,
  Star,
  ChevronLeft,
  ChevronRight,
  Wand2,
  Plus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
// import P5Embed from "./P5Embed";
// import metaverse from "@/assets/images/metaverse.png";

const contentItems = [
  {
    id: 1,
    title: "Visualizing Binary Search Trees",
    description:
      "Interactive visualization of Binary Search Trees, ideal for understanding search algorithms.",
    thumbnail:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221215114732/bst-21.png",
    tags: [
      { name: "Data Structures", icon: "Tree" },
      { name: "Algorithms", icon: "FlowChart" },
      { name: "Binary Tree", icon: "Branch" },
    ],
    category: "Data Structures and Algorithms",
    author: {
      name: "Prof. Rahul Verma",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    embedCount: 320,
    license: "Creative Commons",
    embedCode:
      "<iframe src='https://example.com/binary-search-tree' width='100%' height='400'></iframe>",
    version: "1.0.0",
    rating: 4.7,
    totalRatings: 540,
    editorsChoice: true,
    url: `http://localhost:3000/#json=AoqiIOIjflo2i3-_GXHw8,uLwZ9Fp--BhuxJfbDRAEWw`,
  },
  {
    id: 2,
    title: "Projectile Motion Simulation",
    description:
      "Explore the fundamentals of projectile motion in classical physics through this interactive visualization.",
    thumbnail:
      "https://media.geeksforgeeks.org/wp-content/uploads/20220921201253/vv1.jpg",
    tags: [
      { name: "Physics", icon: "Physics" },
      { name: "Classical Mechanics", icon: "Orbit" },
      { name: "Projectile", icon: "Trajectory" },
    ],
    category: "Classical Physics",
    author: {
      name: "Dr. Arvind Kapoor",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    embedCount: 450,
    license: "MIT",
    embedCode:
      "<iframe src='https://example.com/projectile-motion' width='100%' height='400'></iframe>",
    version: "2.1.4",
    rating: 4.9,
    totalRatings: 380,
    editorsChoice: true,
    url: "http://localhost:3000/#json=Ym2twTRyit6fKl5JON107,slxcvyBSUVhrw0kaIPPPXQ",
  },
  {
    id: 3,
    title: "Quick Sort Algorithm Animation",
    description:
      "Step-by-step visualization of the Quick Sort algorithm, highlighting key operations.",
    thumbnail:
      "https://wat-images.s3.ap-south-1.amazonaws.com/images/course/ci6ldqnqthum/Quick_Sort_0.png",
    tags: [
      { name: "Sorting", icon: "Sort" },
      { name: "Algorithms", icon: "Sequence" },
      { name: "Data Structures", icon: "Array" },
    ],
    category: "Data Structures and Algorithms",
    author: {
      name: "Dr. Suman Reddy",
      avatar: "https://i.pravatar.cc/40?img=7",
    },
    embedCount: 280,
    license: "GPL",
    embedCode:
      "<iframe src='https://example.com/quick-sort' width='100%' height='400'></iframe>",
    version: "3.0.2",
    rating: 4.4,
    totalRatings: 260,
    editorsChoice: false,
  },
  {
    id: 4,
    title: "Molecular Structure of Water",
    description:
      "3D interactive model of the water molecule, showcasing molecular bonds and angles.",
    thumbnail:
      "https://cdn.kastatic.org/ka-perseus-images/c8f5a3e5a16f2fc0a4fdd54eab7204ca39f836be.png",
    tags: [
      { name: "Chemistry", icon: "Atom" },
      { name: "Molecular Structure", icon: "Bond" },
      { name: "Water", icon: "Drop" },
    ],
    category: "Molecular Chemistry",
    author: {
      name: "Dr. Neeta Shah",
      avatar: "https://i.pravatar.cc/40?img=8",
    },
    embedCount: 150,
    license: "Apache 2.0",
    embedCode:
      "<iframe src='https://example.com/water-molecule' width='100%' height='400'></iframe>",
    version: "1.3.5",
    rating: 4.6,
    totalRatings: 310,
    editorsChoice: true,
  },
  {
    id: 5,
    title: "Electric Circuit Analysis",
    description:
      "Interactive circuit analysis tool to understand voltage, current, and resistance relationships.",
    thumbnail:
      "https://cdn1.byjus.com/wp-content/uploads/2023/03/Basic-electric-circuit-1.png",
    tags: [
      { name: "Physics", icon: "Electricity" },
      { name: "Circuits", icon: "CircuitBoard" },
      { name: "Electronics", icon: "Resistor" },
    ],
    category: "Classical Physics",
    author: {
      name: "Prof. Vikram Desai",
      avatar: "https://i.pravatar.cc/40?img=9",
    },
    embedCount: 110,
    license: "MIT",
    embedCode:
      "<iframe src='https://example.com/electric-circuit' width='100%' height='400'></iframe>",
    version: "1.1.0",
    rating: 4.3,
    totalRatings: 205,
    editorsChoice: false,
  },
  {
    id: 6,
    title: "Breadth-First Search (BFS) in Graphs",
    description:
      "Visualize the BFS algorithm for graphs, helpful for understanding shortest path finding.",
    thumbnail: "https://i.ytimg.com/vi/oDqjPvD54Ss/maxresdefault.jpg",
    tags: [
      { name: "Data Structures", icon: "Graph" },
      { name: "Algorithms", icon: "Path" },
      { name: "Graph Theory", icon: "Node" },
    ],
    category: "Data Structures and Algorithms",
    author: {
      name: "Dr. Priya Menon",
      avatar: "https://i.pravatar.cc/40?img=10",
    },
    embedCount: 340,
    license: "Creative Commons",
    embedCode:
      "<iframe src='https://example.com/bfs-graphs' width='100%' height='400'></iframe>",
    version: "2.2.0",
    rating: 4.7,
    totalRatings: 490,
    editorsChoice: true,
  },
  {
    id: 7,
    title: "Organic Reaction Mechanisms",
    description:
      "Understand organic reactions with step-by-step interactive animations.",
    thumbnail:
      "https://cdn.masterorganicchemistry.com/wp-content/uploads/2019/12/1-four-major-categories-of-reactions-in-org-1-are-acid-base-addition-substitution-elimination-key-is-to-recognize-bonds-that-form-and-break.gif",
    tags: [
      { name: "Chemistry", icon: "Beaker" },
      { name: "Organic Reactions", icon: "Flask" },
      { name: "Mechanisms", icon: "Arrow" },
    ],
    category: "Molecular Chemistry",
    author: {
      name: "Dr. Kamlesh Kaur",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    embedCount: 190,
    license: "GPL",
    embedCode:
      "<iframe src='https://example.com/organic-reactions' width='100%' height='400'></iframe>",
    version: "2.1.5",
    rating: 4.8,
    totalRatings: 375,
    editorsChoice: true,
  },
  {
    id: 8,
    title: "DNS Resolution Process",
    description:
      "Explore how DNS translates domain names to IP addresses in a network.",
    thumbnail:
      "https://cf-assets.www.cloudflare.com/slt3lc6tev37/1NzaAqpEFGjqTZPAS02oNv/bf7b3f305d9c35bde5c5b93a519ba6d5/what_is_a_dns_server_dns_lookup.png",
    tags: [
      { name: "Networking", icon: "Network" },
      { name: "DNS", icon: "Server" },
      { name: "Internet", icon: "Globe" },
    ],
    category: "Networks",
    author: {
      name: "Prof. Ankit Sinha",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    embedCount: 210,
    license: "MIT",
    embedCode:
      "<iframe src='https://example.com/dns-resolution' width='100%' height='400'></iframe>",
    version: "1.3.2",
    rating: 4.5,
    totalRatings: 430,
    editorsChoice: true,
  },
  {
    id: 9,
    title: "AVL Tree Rotations",
    description:
      "Interactive visualizations of AVL tree rotations, crucial for balanced data structures.",
    thumbnail:
      "https://i0.wp.com/learnersbucket.com/wp-content/uploads/2021/03/AVL-Tree-in-Javascript.png?fit=768%2C500&ssl=1",
    tags: [
      { name: "Data Structures", icon: "Tree" },
      { name: "AVL Tree", icon: "Balance" },
      { name: "Algorithms", icon: "Rotation" },
    ],
    category: "Data Structures and Algorithms",
    author: {
      name: "Dr. Reema Malik",
      avatar: "https://i.pravatar.cc/40?img=13",
    },
    embedCount: 220,
    license: "Creative Commons",
    embedCode:
      "<iframe src='https://example.com/avl-tree' width='100%' height='400'></iframe>",
    version: "1.4.3",
    rating: 4.9,
    totalRatings: 270,
    editorsChoice: true,
  },
  {
    id: 10,
    title: "TCP Handshake Process",
    description:
      "Visualize the 3-way handshake process in the Transmission Control Protocol.",
    thumbnail:
      "https://source.unsplash.com/random/400x300?tcphttps://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/What%20is%20TCPIP%20(Signal)/TCP-IP.png?width=1320&name=TCP-IP.png",
    tags: [
      { name: "Networking", icon: "Handshake" },
      { name: "TCP", icon: "Protocol" },
      { name: "Communication", icon: "Link" },
    ],
    category: "Networks",
    author: {
      name: "Dr. Shubham Patel",
      avatar: "https://i.pravatar.cc/40?img=14",
    },
    embedCount: 160,
    license: "Apache 2.0",
    embedCode:
      "<iframe src='https://example.com/tcp-handshake' width='100%' height='400'></iframe>",
    version: "1.2.5",
    rating: 4.6,
    totalRatings: 310,
    editorsChoice: false,
  },
];

const itemsPerPage = 5;

export default function VizLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("relevance");
  const [filterBy, setFilterBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [generatedVisualization, setGeneratedVisualization] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("search");
  const handleIViz = (link) => {
    window.location.href = link;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setItems(contentItems);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const filteredAndSortedItems = items
    .filter(
      (item) =>
        (filterBy === "all" || item.category.toLowerCase() === filterBy) &&
        (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.name.toLowerCase().includes(searchTerm.toLowerCase())
          ))
    )
    .sort((a, b) => {
      if (sortBy === "embedCount") return b.embedCount - a.embedCount;
      if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const pageCount = Math.ceil(filteredAndSortedItems.length / itemsPerPage);
  const paginatedItems = filteredAndSortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleItemSelect = async (item) => {
    setIsPreviewLoading(true);
    setSelectedItem(null);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSelectedItem(item);
    setIsPreviewLoading(false);
  };

  const handleGenerateVisualization = async () => {
    setIsGenerating(true);
    setGeneratedVisualization(null);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setGeneratedVisualization(
      `https://source.unsplash.com/random/800x600?${promptText
        .split(" ")
        .join(",")}`
    );
    setIsGenerating(false);
  };

  return (
    <ScrollArea className="h-[80vh] w-[80vw]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="p-4 border-b bg-white dark:bg-gray-800">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Viz Explorer
          </h1>
          <p className="text-muted-foreground mb-4 flex items-center">
            <Search className="mr-2 h-4 w-4" />
            Search for content, filter by category, and embed in your projects
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          <aside className="w-full md:w-1/2 border-r bg-white dark:bg-gray-800 flex flex-col">
            {activeTab === "search" ? (
              <>
                <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 p-4 border-b">
                  <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="relative flex-grow">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search content..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={filterBy} onValueChange={setFilterBy}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="web development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="web design">Web Design</SelectItem>
                        <SelectItem value="server development">
                          server Development
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="embedCount">Embed Count</SelectItem>
                        <SelectItem value="alphabetical">
                          Alphabetical
                        </SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex-1 overflow-auto">
                  <AnimatePresence>
                    {isLoading
                      ? Array(3)
                          .fill(0)
                          .map((_, index) => (
                            <motion.div
                              key={`skeleton-${index}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="p-4 border-b"
                            >
                              <div className="flex items-start space-x-4">
                                <Skeleton className="w-30 h-20 rounded" />
                                <div className="flex-1 space-y-2">
                                  <Skeleton className="h-4 w-3/4" />
                                  <Skeleton className="h-4 w-full" />
                                  <div className="flex space-x-2">
                                    <Skeleton className="h-6 w-16 rounded-full" />
                                    <Skeleton className="h-6 w-16 rounded-full" />
                                    <Skeleton className="h-6 w-16 rounded-full" />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))
                      : paginatedItems.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-4 border-b cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                            onClick={() => handleItemSelect(item)}
                          >
                            <div className="flex items-start space-x-4">
                              <div className="relative object-contain">
                                <img
                                  src={item.thumbnail}
                                  alt=""
                                  width={120}
                                  height={100}
                                  className="rounded bg-gray-200"
                                  loading="lazy"
                                />
                              </div>
                              <div className="flex-1">
                                <h2 className="font-semibold">{item.title}</h2>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {item.description}
                                </p>
                                <div className="mt-2 flex items-center space-x-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage
                                      src={item.author.avatar}
                                      alt={item.author.name}
                                    />
                                    <AvatarFallback>
                                      {item.author.name.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm text-muted-foreground">
                                    {item.author.name}
                                  </span>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {item.tags.map((tag) => (
                                    <Badge
                                      key={tag.name}
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {tag.icon && (
                                        <span
                                          className={`mr-1 ${tag.icon.toLowerCase()}`}
                                        >
                                          {tag.icon}
                                        </span>
                                      )}
                                      {tag.name}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                  </AnimatePresence>
                </div>
                <div className="sticky bottom-0 z-10 p-4 border-t bg-white dark:bg-gray-800 flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {pageCount}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                    }
                    disabled={currentPage === pageCount}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="p-4 space-y-4">
                <Textarea
                  placeholder="Enter your visualization prompt here..."
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  rows={4}
                />
                <Button
                  onClick={handleGenerateVisualization}
                  disabled={isGenerating}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Visualization
                    </>
                  )}
                </Button>
              </div>
            )}
          </aside>
          <main className="flex-1 p-4 overflow-auto bg-white dark:bg-gray-800">
            {activeTab === "search" ? (
              isPreviewLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Skeleton className="h-[400px] w-full rounded-lg" />
                </div>
              ) : selectedItem ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {selectedItem.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {selectedItem.category} • {selectedItem.embedCount}{" "}
                        embeds • By {selectedItem.author.name}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(selectedItem.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">
                          {selectedItem.rating.toFixed(1)} (
                          {selectedItem.totalRatings} ratings)
                        </span>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save to Collection
                      </Button>
                      <Button onClick={(_) => handleIViz(selectedItem?.url)}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Embed
                      </Button>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden mb-4">
                    <img
                      src={selectedItem.thumbnail}
                      alt=""
                      width={1200}
                      height={400}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <span className="text-white font-mono text-sm">
                        v{selectedItem.version}
                      </span>
                    </div>
                  </div>
                  <Tabs defaultValue="details">
                    <TabsList>
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                      <TabsTrigger value="license">License</TabsTrigger>
                    </TabsList>
                    <TabsContent value="details">
                      <p className="text-muted-foreground mb-4">
                        {selectedItem.description}
                      </p>
                      <Separator className="my-4" />
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tags.map((tag) => (
                          <Badge key={tag.name} variant="secondary">
                            {tag.icon && (
                              <span
                                className={`mr-1 ${tag.icon.toLowerCase()}`}
                              >
                                {tag.icon}
                              </span>
                            )}
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="code">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code>{selectedItem.embedCode}</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="license">
                      <p>
                        This content is licensed under the{" "}
                        {selectedItem.license} license.
                      </p>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <img
                    // src={metaverse}
                    alt="Select visualization"
                    width={200}
                    height={200}
                    className="mb-4"
                  />
                  <p className="text-muted-foreground">
                    Select a visualization to preview or generate a new one
                  </p>
                </motion.div>
              )
            ) : isGenerating ? (
              <div className="flex items-center justify-center h-full">
                <Wand2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : generatedVisualization ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">Generated Visualization</h3>
                <div className="relative rounded-lg overflow-hidden mb-4">
                  {/* <P5Embed
                    src={
                      "https://qmdnzkeynanpnivehrbz.supabase.co/storage/v1/object/public/sketch/sine.js"
                    }
                  ></P5Embed> */}
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={(_) =>
                      handleIViz(
                        "http://localhost:3000/#json=hPYnls6iKkkp4CcW8clEt,Ap5-PA24lam1KKJ0kaFyXQ"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Embed
                  </Button>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add to Visualizations
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                <Wand2 className="h-12 w-12 mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Enter a prompt and click Generate to create a visualization
                </p>
              </motion.div>
            )}
          </main>
        </div>
      </motion.div>
      <ScrollBar />
    </ScrollArea>
  );
}
