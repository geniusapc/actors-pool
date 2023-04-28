import React from 'react'
const sidebarList = [
    { id: 1, name: "Directory", icon: "/icons/directory.svg", href: "/directory" },
    { id: 2, name: "Profile", icon: "/icons/user.svg", href: "/profile" },
    { id: 3, name: "Messages", icon: "/icons/message.svg", href: "/messages" },
    { id: 4, name: "Projects", icon: "/icons/clipboard.svg", href: "/projects" },
    { id: 5, name: "Settings", icon: "/icons/settings.svg", href: "/settings" }
]

function SideBar() {
    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 md:w-24 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-between">
                <ul className="space-y-2 font-medium">
                    {sidebarList.map((item) => <li key={item.id}>
                        <a href={item.href} className="flex flex-row  md:flex-col items-center text-center p-2 mb-4 text-xs text-gray-900 rounded-lg dark:text-white hover:bg-gray-100  dark:hover:bg-gray-700">
                            <img src={item.icon} alt={item.name} />
                            <span className="ml-3 md:ml-0">{item.name}</span>
                        </a>
                    </li>)}
                </ul>
                <a href="#1" className="flex flex-row md:flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src="icons/logout.svg" alt="" />
                </a>
            </div>
        </aside>
    )
}

export default SideBar