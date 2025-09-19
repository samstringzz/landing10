import HomeSlider from "@/components/HomeSlider";
import GallerySlider from "@/components/GallerySlider";
import EventSection from "@/components/EventSection";
import TaglineSection from "@/components/TaglineSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import ProductsSection from "@/components/ProductsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import FoodKingLayout from "@/layouts/FoodKingLayout";

const page = () => {
  return (
    <FoodKingLayout>
      {/* 1. Hero Section */}
      <HomeSlider />
      
      {/* 2. Gallery Section */}
      <GallerySlider />
      
      {/* 3. Event Section */}
      <EventSection />
      
      {/* 4. Tagline Section */}
      <TaglineSection />
      
      {/* 5. Services We Offer Section */}
      <ServicesSection />
      
      {/* 6. What Our Clients Say Section */}
      <TestimonialSlider />
      
      {/* 7. Our Products Section */}
      <ProductsSection />
      
      {/* 8. Subscribe to Newsletter Section */}
      <NewsletterSection />
      
      {/* 9. Contact Us Section */}
      <ContactSection />
    </FoodKingLayout>
  );
};

export default page;
