import React from "react";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { formatDateUntilSecond, setDataTags } from "../../helper/functions";

const Table = props => {
  const renderHeader = () => {
    const { headers } = props;
    return Object.values(headers).map((header, i) => (
      <th className="align-middle" key={i} style={{ width: '10%' }}>
        {header}
      </th>
    ));
  };

  const returnData = (data, header) => {
    const { tags } = props;
    switch (header) {
      case 'tags':
        return setDataTags(data[header], tags)
      case 'created_at':
        return formatDateUntilSecond(data[header]);
      case 'updated_at':
        return data[header] ? formatDateUntilSecond(data[header]) : 'Güncəllənməyib';
      case 'image':
        return <img src={data[header]} width='50' height='50' />;
      case 'article':
        return <button className='btn btn-sm btn-primary'><RiArticleFill title='Məqaləyə buradan bax.' /></button>;
      default:
        return data[header];
    }
  }

  const renderData = () => {
    const { headers, data, insertOrUpdateHandler, deleteItem } = props;
    return data.map((d, i) => {
      return (
        <tr key={i}>
          <td className="align-middle">{i + 1}</td>
          {Object.keys(headers).map((h, i) => {
            return (
              <td className='align-middle' key={i}>{returnData(d, h)}</td>
            )
          })}
          <td className="align-middle">
            <button className="btn btn-sm btn-success mr-1" onClick={() => insertOrUpdateHandler(d)}>
              <GrUpdate />
            </button>
            <button
              className="btn btn-sm btn-danger ml-1"
              onClick={() => deleteItem(d)}
            >
              <AiOutlineDelete />
            </button>
          </td>
        </tr>
      );
    });
  };

  const { insertOrUpdateHandler } = props;

  return (
    <div className="table-responsive">
      <table className="table table-sm table-dark table-striped table-hover text-center">
        <thead>
          <tr>
            <th className='align-middle' style={{ width: '15%' }}>#</th>
            {renderHeader()}
            <th className="align-middle" style={{ width: '15%' }}>
              <button className="btn btn-sm btn-primary" onClick={() => insertOrUpdateHandler()}>Yeni</button>
            </th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  );
};

export default Table;
