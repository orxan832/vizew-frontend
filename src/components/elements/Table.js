import React from "react";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";

const Table = (props) => {
  const renderHeader = () => {
    const { headers } = props;
    return Object.values(headers).map((header, i) => (
      <th className="align-middle" key={i}>
        {header}
      </th>
    ));
  };

  const renderData = () => {
    const { headers, data } = props;
    return data.map((d, i) => {
      return (
        <tr key={i}>
          <td className="align-middle">{i + 1}</td>
          {Object.keys(headers).map((h, i) => (
            <td key={i}>{d[h]}</td>
          ))}
          <td className="align-middle">
            <button className="btn btn-sm btn-success mr-1">
              <GrUpdate onClick={() => props.insertOrUpdateHandler(d)} />
            </button>
            <button
              className="btn btn-sm btn-danger ml-1"
              onClick={() => props.delete(d)}
            >
              <AiOutlineDelete />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped text-center table-sm">
        <thead>
          <tr>
            <th className='align-middle' style={{ minWidth: '100px' }}>#</th>
            {renderHeader()}
            <th className="align-middle" style={{ minWidth: '100px' }}>
              <button className="btn btn-sm btn-primary" onClick={() => props.insertOrUpdateHandler()}>Yeni</button>
            </th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  );
};

export default Table;
