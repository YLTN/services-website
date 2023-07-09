import Hero from '@/components/home/Hero';
import Info from '@/components/home/Info';
import Reviews from '@/components/home/Reviews';
import ServicesSlider from '@/components/home/ServicesSlider';
import Teaser from '@/components/home/Teaser';

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Reviews />
      <ServicesSlider />
      <Teaser />
    </>
  )
}
