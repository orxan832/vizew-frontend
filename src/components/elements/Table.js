import React, { useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { formatDateUntilSecond, setDataTags } from "../../helper/functions";
import { roles } from "../../helper/enum";
import Reader from "../modals/reader";

const Table = (props) => {
  const [modal, setModal] = useState(false);
  const [article, setArticle] = useState("");

  const renderHeader = () => {
    const { headers } = props;
    return Object.values(headers).map((header, i) => (
      <th className="align-middle" key={i} style={{ width: "10%" }}>
        {header}
      </th>
    ));
  };

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

  const renderData = () => {
    const { headers, data, insertOrUpdateHandler, deleteItem } = props;
    return data.map((d, i) => {
      return (
        <tr key={i}>
          <td className="align-middle">{i + 1}</td>
          {Object.keys(headers).map((h, i) => {
            return (
              <td className="align-middle" key={i}>
                {returnData(d, h)}
              </td>
            );
          })}
          <td className="align-middle">
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
          </td>
        </tr>
      );
    });
  };

  const { insertOrUpdateHandler, headers, modalHeader, form } = props;

  return (
    <>
      <div
        className="table-responsive animated fadeIn px-3"
        style={{ height: "800px" }}
      >
        <table className="table table-sm table-dark table-striped table-bordered table-hover text-center">
          <thead>
            <tr>
              <th
                colSpan={Object.keys(headers).length + 2}
                className="align-middle"
                style={{ height: "50px" }}
              >
                <h3>{modalHeader}</h3>
              </th>
            </tr>
            <tr>
              <th className="align-middle" style={{ width: "15%" }}>
                #
              </th>
              {renderHeader()}
              <th className="align-middle" style={{ width: "15%" }}>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => insertOrUpdateHandler()}
                >
                  Yeni
                </button>
              </th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
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
