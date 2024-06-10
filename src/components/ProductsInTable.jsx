function ProductsInTable({ productId, description, unitValue, quantity, ondelete }) {
  return (
    <tr>
      <td className="text-center">{productId}</td>
      <td className="text-center">{description}</td>
      <td className="text-center">{unitValue}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">{unitValue * quantity}</td>
      <td className="text-center">
        <button className="btn btn-outline-danger" onClick={() => ondelete(productId)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default ProductsInTable;
