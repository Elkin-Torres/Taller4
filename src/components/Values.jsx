import { useSelector } from "react-redux";

function Values() {
  const { subtotal, iva, total } = useSelector((store) => store.infoForm);

  return (
    <div className="resultados p-5">
      <div className="text-center">
        <p>Subtotal: ${subtotal}</p>
        <p>IVA (16%): ${iva}</p>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
}

export default Values;
