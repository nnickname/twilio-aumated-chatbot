import AddInspectionLayout from '@/modules/inspections/lib/addInspection.layout';
import SideBarLayout from '@/modules/sidebar/lib/sidebar.layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Crear inspección - Revizora",
};

const Page = () => {
  return (<SideBarLayout sideBarChildren={
    <div>
        <AddInspectionLayout/>
    </div>
  }/>);
}

export default Page;