import "./ProductCard.css";

function ProductCard({ product }) {
  const { category, title, description, material, image } = product;

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img src={image} alt={title} className="product-card__image" />
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>

        <div className="product-card__footer">
          <span className="product-card__material">{material}</span>
          <span className="product-card__link">
            Ver detalle <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
