import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../features/formSlice";
import { firstForm } from "../schemas/firstForm";

function BillForm() {
  const [productId, setProductId] = useState("");
  const [description, setDescription] = useState("");
  const [unitValue, setUnitValue] = useState("");
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();
  const { dataForm } = useSelector((store) => store.infoForm);

  const handleSubmit = () => {
    dispatch(addProducts({ productId, description, unitValue, quantity }));
    setProductId("");
    setDescription("");
    setUnitValue("");
    setQuantity("");
  };

  return (
    <div className="factura p-4">
      <h1>Factura</h1>
      <Formik initialValues={dataForm} onSubmit={handleSubmit} validationSchema={firstForm}>
        <Form autoComplete="off">
          <div className="factura__cliente factura__position row mb-3">
            <div className="col-md-6">
              <label htmlFor="billId" className="form-label">
                Número de Factura:
              </label>
              <Field type="text" name="billId" id="billId" className="form-control" autoComplete="off" required autoFocus />
            </div>
            <div className="col-md-6">
              <label htmlFor="clientName" className="form-label">
                Nombres del cliente:
              </label>
              <Field type="text" name="clientName" id="clientName" className="form-control" autoComplete="off" required />
              <ErrorMessage name="clientName" component="p" className="text-danger" />
            </div>
            <div className="col-md-6">
              <label htmlFor="cedula" className="form-label">
                Cédula:
              </label>
              <Field type="number" name="cedula" id="cedula" className="form-control" autoComplete="off" required />
              <ErrorMessage name="cedula" component="p" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label">
                Teléfono:
              </label>
              <Field type="number" name="phoneNumber" id="phoneNumber" className="form-control" autoComplete="off" required />
              <ErrorMessage name="phoneNumber" component="p" />
            </div>
          </div>
          <div className="factura__correo col-md-6">
            <label htmlFor="email" className="form-label">
              Correo:
            </label>
            <Field type="text" name="email" id="email" className="form-control" autoComplete="off" required />
            <ErrorMessage name="email" component="p" />
          </div>
          <br />
          <br />
          <div className="factura__producto factura__position row mb-3">
            <div className="col-md-6">
              <Field
                type="number"
                value={productId}
                className="form-control mb-3"
                onChange={(e) => setProductId(e.target.value)}
                name="productId"
                id="productId"
                placeholder="ID Producto"
                autoComplete="off"
                required
              />
            </div>
            <div className="col-md-6">
              <Field
                type="text"
                value={description}
                className="form-control mb-3"
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
                placeholder="Descripción"
                autoComplete="off"
                required
              />
            </div>

            <div className="col-md-6">
              <Field
                type="number"
                value={unitValue}
                className="form-control mb-3"
                onChange={(e) => setUnitValue(e.target.value)}
                name="uValue"
                id="uValue"
                placeholder="Valor Unitario"
                autoComplete="off"
                required
              />
            </div>

            <div className="col-md-6">
              <Field
                type="number"
                value={quantity}
                className="form-control mb-3"
                onChange={(e) => setQuantity(e.target.value)}
                name="quantity"
                id="quantity"
                placeholder="Cantidad"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" value="Agregar Producto">
            Agregar producto
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default BillForm;
