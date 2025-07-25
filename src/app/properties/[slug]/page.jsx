// pages/property/[slug].js
import { propertyList } from '../../data/properties';
import PropertyDetails from '../../components/PropertyDetails';

// Generate all static paths
export async function generateStaticParams() {
  return propertyList.map((property) => ({
    slug: property.slug,
  }));
}

// This will be called at build time
export default async function PropertyPage({ params }) {
  const slug = params.slug;
  const property = propertyList.find((p) => p.slug === slug);
  return <PropertyDetails property={property} />;
}
