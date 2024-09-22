import { Metadata } from 'next';
import IndexLayout from '../modules/auth/lib/index.layout';

export const metadata: Metadata = {
  title: "Onboard on Revizora",
};

const Page = () => {
  return (<IndexLayout/>);
}

export default Page;