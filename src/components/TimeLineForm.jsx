import "../Styles/timeLine.css";
/* eslint-disable react/prop-types */

export default function TimeLineForm({ info1, info2, number }) {
  return (
    <div className="timeLines">
      <div className="col-auto text-center flex-column d-none d-sm-flex">
        <div className="row h-50 ">
          <div className="col d-none">&nbsp;</div>
          <div className="col d-none">&nbsp;</div>
        </div>
        <h5 className="m-2">
          {number === 1 ? (
            <spam className="badge rounded-circle bg-ligth border object">
              {number}
            </spam>
          ) : (
            <spam className="badge rounded-circle bg-ligth border numero">
              {number}
            </spam>
          )}
        </h5>
        {number !== 3 ? (
          <div className="row h-50">
            <div className="col border-end ">&nbsp;</div>
            <div className="col ">&nbsp;</div>
          </div>
        ) : (
          " "
        )}
      </div>
      <div className="col py-2">
        <div>
          <div>
            <div className="float-end "></div>
            <h4 >
              <b className="titleInf">{info1}</b> <p className="fraseInf">{info2}</p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
