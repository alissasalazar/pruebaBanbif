import TimeLineForm from "./TimeLineForm";
import "../Styles/timeLine.css";
import imgTarjeta from "../img/tarjeta.jpeg"

export default function TimeLine() {
  return (
    <div className="content">
        <img src={imgTarjeta} alt="card" className="card"/>
      <b className="messageCard">
        ¡KEVIN Estas cerca de conseguir tu Tarjeta Visa Clásica!
      </b>
      <TimeLineForm
        info1={"Tus Datos"}
        info2={"Verificamos tu identidad"}
        number={1}
      />
      <TimeLineForm
        info1={"Tu producto"}
        info2={"Descubre sus beneficios y promociones"}
        number={2}
      />
      <TimeLineForm info1={"¡ Todo listo!"} number={3} />
    </div>
  );
}
