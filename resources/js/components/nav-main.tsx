import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

import { Collapsible,CollapsibleContent,CollapsibleTrigger,} from '@/components/ui/collapsible';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';

import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';

function NavItemRenderer({ item }: { item: NavItem }) {
    const { isCurrentUrl } = useCurrentUrl();

    if (item.items?.length) {
        const hasActiveChild = item.items.some(
            (child) => child.href && isCurrentUrl(child.href)
        );

        return (
            <Collapsible defaultOpen={hasActiveChild} className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={{ children: item.title }} className={item.items ? "bg-muted hover:bg-muted/80" : ""}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>

                            <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {item.items.map((child) => (
                                <SidebarMenuSubItem key={child.title}>
                                    {child.href ? (
                                        <SidebarMenuSubButton
                                            asChild
                                            isActive={isCurrentUrl(child.href)}
                                        >
                                            <Link href={child.href} prefetch>
                                                <span>{child.title}</span>
                                            </Link>
                                        </SidebarMenuSubButton>
                                    ) : (
                                        <NavItemRenderer item={child} />
                                    )}
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        );
    }

    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                asChild
                isActive={item.href ? isCurrentUrl(item.href) : false}
                tooltip={{ children: item.title }}
            >
                <Link href={item.href!} prefetch>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}

export function NavMain({ items = [] }: { items: NavItem[] }) {
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>

            <SidebarMenu>
                {items.map((item) => (
                    <NavItemRenderer
                        key={item.title}
                        item={item}
                    />
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
