import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ItemProducto = ({producto}) => {

  const borrarProducto =()=>{
    
  }

   return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={'/administrador/editar'}>Editar</Link>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
