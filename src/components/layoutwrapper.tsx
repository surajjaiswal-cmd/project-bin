import Header from "@/components/navbar";
import Footer from "@/components/footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      {<Header />}
      {children}
      {<Footer />}
    </div>
  );
};

export default LayoutWrapper;
