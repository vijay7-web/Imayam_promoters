// pages/property/[slug].js
import { propertyList } from '../../data/allProperties';
import PropertyDetails from '../../components/PropertyDetails';

// Generate all static paths
export async function generateStaticParams() {
  return propertyList.map((property) => ({
    slug: property.slug,
  }));
}

// This will be called at build time
export default function PropertyPage({ params }) {
  const property = propertyList.find((p) => p.slug === params.slug);
  return <PropertyDetails property={property} />;
}
