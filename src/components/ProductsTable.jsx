import { deleteProduct } from "../features/formSlice.js";
import ProductsInTable from "./ProductsInTable.jsx";
import { useDispatch, useSelector } from "react-redux";

function ProductsTable() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.infoForm);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <div className="table-responsive p-5">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">ID producto</th>
              <th className="text-center">Descripción</th>
              <th className="text-center">Valor Unitario</th>
              <th className="text-center">Cantidad</th>
              <th className="text-center">Subtotal</th>
              <th className="text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductsInTable
                key={index}
                productId={product.productId}
                description={product.description}
                unitValue={product.unitValue}
                quantity={product.quantity}
                ondelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductsTable;
