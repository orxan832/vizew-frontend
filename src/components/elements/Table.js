import React, { useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { formatDateUntilSecond, setDataTags } from "../../helper/functions";
import { roles } from "../../helper/enum";
import Reader from "../modals/reader";
import { MDBDataTable } from 'mdbreact';

const Table = (props) => {
  const [modal, setModal] = useState(false);
  const [article, setArticle] = useState("");

  const returnData = (data, header) => {
    const { tags } = props;
    switch (header) {
      case "tags":
        return setDataTags(data[header], tags);
      case "role":
        return roles.find((role) => role.code === data[header])?.name;
      case "created_at":
        return formatDateUntilSecond(data[header]);
      case "updated_at":
        return data[header]
          ? formatDateUntilSecond(data[header])
          : "Güncəllənməyib";
      case "image":
        return <img src={data[header]} width="50" height="50" />;
      case "article":
        return (
          <button
            title="Məqaləyə buradan bax."
            className="btn btn-sm btn-primary"
            onClick={() => openArticle(data)}
          >
            <RiArticleFill />
          </button>
        );
      default:
        return data[header];
    }
  };

  const openArticle = (data) => {
    setArticle(data);
    setModal(!modal);
  };

  const renderTableData = () => {
    const { headers, data, insertOrUpdateHandler, deleteItem } = props;
    const columns = Object.keys(headers).map(key => {
      return {
        label: headers[key],
        field: key,
        sort: 'asc',
        // width: 
      }
    });
    columns.unshift({
      label: '#',
      field: 'index',
      sort: 'asc',
    })
    columns.push({
      label: <button
        className="btn btn-sm btn-primary"
        onClick={() => insertOrUpdateHandler()}
      >
        Yeni
      </button>,
      field: 'buttons',
      sort: 'asc'
    })
    const rows = data.map((d, i) => {
      const row = {};
      Object.keys(headers).map(key => {
        row[key] = returnData(d, key);
      });
      row.buttons = <div className='d-flex justify-content-center'>
        <button
          className="btn btn-sm btn-success mr-1"
          onClick={() => insertOrUpdateHandler(d)}
        >
          <GrUpdate />
        </button>
        <button
          className="btn btn-sm btn-danger ml-1"
          onClick={() => deleteItem(d)}
        >
          <AiOutlineDelete />
        </button>
      </div>;
      return row;
    });
    return { columns, rows };
  }

  return (
    <>
      <div className='vizew-datatable px-3'>
        <MDBDataTable
          dark striped
          noBottomColumns
          className='color-light'
          searchLabel='Axtarış'
          infoLabel={['Göstərilir', '-', 'Sətir sayı', '']}
          paginationLabel={['Əvvəlki', 'Sonrakı']}
          data={renderTableData()}
          displayEntries={false} />
      </div>
      {modal && (
        <Reader
          article={article}
          modal={modal}
          modalHandler={() => setModal(!modal)}
        />
      )}
    </>
  );
};

export default Table;
