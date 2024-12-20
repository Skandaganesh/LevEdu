import Navbar from "@/components/Navbar";
import Sidebar from "@/components/SideBar";
import Content from "@/components/content";
import Footer from "@/components/Footer";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blackNavbar text-white">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
