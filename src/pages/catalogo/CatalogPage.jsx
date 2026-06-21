import CatalogHeader from "../../components/catalogo/CatalogHeader.jsx";
import CatalogSidebar from "../../components/catalogo/CatalogSidebar.jsx";
import ProductGrid from "../../components/catalogo/ProductGrid.jsx";
import "./CatalogPage.css";

function CatalogPage() {
  return (
    <div className="catalog-page">
      <CatalogHeader />

      <div className="catalog-page__body">
        <CatalogSidebar />

        <main className="catalog-page__content">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}

export default CatalogPage;
