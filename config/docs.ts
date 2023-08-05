import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {


  mainNav: [

    {

      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Images",
      href: "/images",
    },

  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
      ],
    },


  ],
}
