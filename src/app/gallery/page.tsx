// app/gallery/page.tsx
import { Metadata } from 'next';
import Gallery from '@/components/GalleryFolder';
import { getGalleryData } from '@/services/galleryService';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'Browse through our collection of photos organized by events',
};

export default async function GalleryPage() {
  const galleryData = await getGalleryData();

  return (
    <main className="min-h-screen bg-gray-50">
     
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 px-4">Photo Gallery</h1>
        <Gallery initialData={galleryData} />
      </div>
    </main>
  );
}