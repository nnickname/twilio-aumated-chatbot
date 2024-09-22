import DashboardAppLayout from '@/modules/dashboard/lib/dashboard.layout';
import SideBarLayout from '@/modules/sidebar/lib/sidebar.layout';
import { Skeleton } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard - Revizora",
};

const Page = () => {
  return (<SideBarLayout sideBarChildren={
    <div>
        <DashboardAppLayout/>
    </div>
  }/>);
}

export default Page;