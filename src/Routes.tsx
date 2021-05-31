import { ReactComponent as ArchiveIcon } from "./images/ic_archive.svg";
import { ReactComponent as ExchangeIcon } from "./images/exchange.svg";
import { ReactComponent as PulseIcon } from "./images/ic_Pulse.svg";
import { ReactComponent as NotificationIcon } from "./images/ic_Notification.svg";
import { ReactComponent as HomeIcon } from "./images/iconspace_Home 2_25px.svg";
import { ReactComponent as GoalIcon } from "./images/ic_Goal.svg";
import { ReactComponent as BirthdayIcon } from "./images/ic_Birthday.svg";
import { ReactComponent as FriendIcon } from "./images/ic_Friends.svg";
import { ReactComponent as DashboardIcon } from "./images/ic_Dashboard.svg";
import { ReactComponent as HeadquartersIcon } from "./images/ic_headquarters.svg";
import { ReactComponent as AssignmentsIcon } from "./images/ic_Assignments Outline.svg";

const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        icon: <HomeIcon />,
    },
    {
        path: '/Notifications',
        sidebarName: 'Notifications',
        icon: <NotificationIcon />,
        icon2: 'circle',
    },
    {
        path: '/NewsFeed',
        sidebarName: 'NewsFeed',
        icon: <PulseIcon />,
        icon2: 'add_circle',
    },
    {
        path: '/Quests',
        sidebarName: 'Quests',
        icon: <ArchiveIcon />,
        icon2: 'add_circle',
    },
    {
        path: '/x',
        sidebarName: 'Goals Setting',
        icon: <GoalIcon />,
        icon2: 'add_circle',
    },
    {
        path: '/x',
        sidebarName: 'Rewards',
        icon: <BirthdayIcon />,
        icon2: 'expand_less',
    },
    {
        path: '/x',
        sidebarName: 'Collaborate',
        icon: <FriendIcon />,
        icon2: 'expand_less',
    },
    {
        path: '/x',
        sidebarName: 'Games',
        icon: <DashboardIcon />,
        icon2: 'expand_less',
    },
    {
        path: '/x',
        sidebarName: 'Organizations',
        icon: <HeadquartersIcon />,
        icon2: 'expand_less',
    },
    {
        path: '/x',
        sidebarName: 'Reports',
        icon: <AssignmentsIcon />,
        icon2: 'expand_less',
    },
];

export default Routes;