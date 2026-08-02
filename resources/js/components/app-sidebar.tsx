import { Link } from '@inertiajs/react';
import { BookOpen, ChartColumn, FolderGit2, FolderTree, History, LayoutGrid, School, Users } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import teachers from '@/routes/teachers';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
     {
            title: "Users",
            icon: Users,
            items: [
                {
                    title: "Teachers",
                    href: teachers.index(),
                },
                {
                    title: "Resource Managers",
                    href: "#",
                },
            ],
         },
         {
            title: 'Schools',

            icon: School,
        },
         {
            title: 'Categories',

            icon: FolderTree,
            items: [
                {
                    title: 'Subjects',

                },
                {
                    title: 'Grade Levels',

                },
                {
                    title: 'Quarters',

                },
                {
                    title: 'Resource Types',

                },
            ],
        },
         {
            title: 'Resources',

            icon: BookOpen,
        },
         {
            title: 'Reports',

            icon: ChartColumn,
        },
         {
            title: 'Activity Logs',

            icon: History,
        },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
