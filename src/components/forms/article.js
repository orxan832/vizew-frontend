import React, { useEffect, useState } from "react";
import axios from "../../helper/axios";
import * as notification from "../../helper/notification";
import { sweetConfirm } from "../../helper/sweet";
import Select from "../elements/Select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { validation } from "../../helper/functions";
import { useSelector } from "react-redux";

const Article = (props) => {
  const [form, setForm] = useState(props.form);
  const [tagSelect, setTagSelect] = useState([]);
  const [tagOptions, setTagOptions] = useState([]);

  const userId = useSelector(state => state.user.user.id);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => setForm({ ...form, image: e.target.result });
    reader.readAsDataURL(file);
  };

  const selectChangeHandler = (option) => {
    setTagOptions(option);
  };

  const editorChangeHandler = (event, editor) => {
    setForm({ ...form, article: editor.getData() });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { tabId, headers, modalHeader, getData, modalHandler } = props;
    const tagsArray = [];
    tagOptions.map((option) => tagsArray.push(option.value));
    const tags = tagsArray.toString();
    form.tags = tags;
    delete headers.full_name
    const access = validation(form, headers);
    if (access) {
      const tab = tabId.split("-")[2];
      sweetConfirm(async () => {
        await axios.post(`/${tab}/CRUD`, { ...form, author_id: userId });
        getData(tabId, modalHeader);
        modalHandler();
        notification.success(
          `Məlumat müvəffəqiyyətlə ${form.control === 1 ? "əlavə olundu" : "dəyişdirildi"
          }.`
        );
      });
    } else {
      notification.error("Xanaları tam şəkildə doldurun!");
    }
  };

  useEffect(() => {
    const getData = () => {
      const { tags } = props;
      const tagSelectData = [];
      const tagOptions = [];
      tags.map((d) => tagSelectData.push({ label: d.tag, value: d.id }));
      setTagSelect(tagSelectData);
      if (form.control === 2 && form.tags) {
        form.tags.split(",").map((tag) => {
          const data = tags.find((d) => d.id === Number(tag));
          tagOptions.push({ label: data.tag, value: data.id });
          return true;
        });
        setTagOptions(tagOptions);
      }
    };
    getData();
  }, [form.control, form.tags, props]);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Başlıq - 100 şrift"
          maxLength={100}
          value={form.title || ""}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="subject"
          placeholder="Mövzu - 200 şrift"
          maxLength={200}
          value={form.subject || ""}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            onChange={fileChangeHandler}
            id="validatedCustomFile"
          />
          <label className="custom-file-label" htmlFor="validatedCustomFile">
            Şəkil seç...
          </label>
        </div>
      </div>
      <div className="form-group">
        <Select
          options={tagSelect}
          changed={selectChangeHandler}
          multi={true}
          value={tagOptions}
        />
      </div>
      <div className="form-group">
        <CKEditor
          onReady={(editor) => {
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );
          }}
          config={{
            ckfinder: {
              uploadUrl: `${process.env.REACT_APP_BACKEND}/file/uploadImage`,
            },
          }}
          onChange={editorChangeHandler}
          data={form.article}
          editor={DecoupledEditor}
        />
      </div>
      <button type="submit" className="btn btn-success float-right mt-3">
        Yadda Saxla
      </button>
    </form>
  );
};

export default Article;
