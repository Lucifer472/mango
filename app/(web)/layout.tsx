import Navbar from "@/components/navigation/navbar";
import WhatsAppLink from "@/components/views/wp-link";
import Footer from "@/components/navigation/footer";

const WebLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppLink />
    </>
  );
};

export default WebLayout;
