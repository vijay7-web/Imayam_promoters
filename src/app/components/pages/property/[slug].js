// pages/property/[slug].js
import { propertyList } from '../../../data/properties';
import PropertyDetails from '../../components/PropertyDetails';

export async function getStaticPaths() {
  const paths = propertyList.map((property) => ({
    params: { slug: property.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const property = propertyList.find((p) => p.slug === params.slug);
  return { props: { property } };
}

const PropertyPage = ({ property }) => {
  return <PropertyDetails property={property} />;
};

export default PropertyPage;
