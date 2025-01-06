import * as React from "react";
import {
  Command,
  LifeBuoy,
  Send,
  Settings2,
  Presentation,
  Box,
  ChartArea,
  SquareFunction,
  Atom,
  Binary,
  Brush,
} from "lucide-react";

import { NavMain } from "@/components/nav/nav-main";
import { NavProjects } from "@/components/nav/nav-projects";
import { NavSecondary } from "@/components/nav/nav-secondary";
import { NavUser } from "@/components/nav/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { siteConfig } from "@/data/data";
import { useUser } from "@clerk/clerk-react";

const data = {
  navMain: [
    {
      title: "Class",
      url: "/class",
      icon: Presentation,
      isActive: true,
      items: [
        {
          title: "Feed",
          url: "#",
        },
        {
          title: "People",
          url: "#",
        },
        {
          title: "Grade",
          url: "#",
        },
        {
          title: "Context",
          url: "#",
        },
      ],
    },
    {
      title: "Assets",
      url: "#",
      icon: Box,
      items: [
        {
          title: "iVisualisations",
          url: "#",
        },
        {
          title: "Mind Maps",
          url: "#",
        },
        {
          title: "Videpts",
          url: "#",
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartArea,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Canvas",
      url: "/canvas",
      icon: Brush,
    },
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Mathematics",
      url: "#",
      icon: SquareFunction,
    },
    {
      name: "Computer Science",
      url: "#",
      icon: Binary,
    },
    {
      name: "Physics",
      url: "#",
      icon: Atom,
    },
  ],
};

type UserData = {
  name: string;
  email: string;
  avatar: string;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const userData: UserData = {
    name: user?.fullName || "User",
    email: user?.emailAddresses?.[0]?.emailAddress || "abc",
    avatar: "/avatars/shadcn.jpg",
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {siteConfig.name}
                  </span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
