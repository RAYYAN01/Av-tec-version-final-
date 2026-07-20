import PageHero from '@/components/PageHero';
import GalleryExplorer from '@/components/GalleryExplorer';
import { GALLERY_IMAGES, GALLERY_VIDEOS } from '@/data/gallery';

export const metadata = {
  title: 'Gallery | AV-TEC',
  description: 'Event photos, equipment setups, production reels and highlight videos from AV-TEC — filter by photos or videos.',
};

export default function GalleryPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Our Work"
        title="Gallery"
        subtitle="Photos and videos from our events and equipment — filter, then click any tile to view it full size."
        bg="/assets/images/gallery/led-wall-product-launch.jpg"
      />
      <section className="section">
        <GalleryExplorer images={GALLERY_IMAGES} videos={GALLERY_VIDEOS} />
      </section>
    </div>
  );
}
