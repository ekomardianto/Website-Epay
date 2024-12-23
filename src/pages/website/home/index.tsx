import WebsiteLayout from "@/components/layout/WebsiteLayout";
import HomeView from "@/components/view/website/home";

const HomePage = () => {
  return (
    <WebsiteLayout>
      <HomeView />
    </WebsiteLayout>
  );
};
HomePage.metaDescription =
  "epay bergerak di bidang digitalisasi pembayaran, payment gateway berbasis API Integrasi Pembayaran Online Virtual Account Bank, Pembayaran E-Commerce, Dana, Gopay, dan Ewallet lainnya.";
export default HomePage;
