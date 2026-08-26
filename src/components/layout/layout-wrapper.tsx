"use client";

import { usePathname } from "next/navigation";
import { Sidebar, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isAuthPage = pathname.startsWith("/auth");

    if (isAuthPage) {
        return <>{children}</>
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}