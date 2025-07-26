// pages/property/[slug].js
import { upcomingProperties } from '../../data/upcomingProperties';
import UpcomingPropertyDetails from '../../components/UpcomingPropertyDetails';

// Generate all static paths
export async function generateStaticParams() {
  return upcomingProperties.map((property) => ({
    slug: property.slug,
  }));
}

// This will be called at build time
export default function PropertyPage({ params }) {
  const property = upcomingProperties.find((p) => p.slug === params.slug);
  return <UpcomingPropertyDetails property={property} />;
}
