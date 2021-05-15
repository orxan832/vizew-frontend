import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { sweetInfo } from "../helper/sweet";
import Base from "../components/articles/Base";
import Trending from "../components/articles/Trending";
import Featured from "../components/articles/Featured";
import Random from "../components/articles/Random";
import Latest from "../components/articles/Latest";
import IndexSidebar from "../components/sidebars/IndexSidebar";
import axios from "../helper/axios";

class Index extends Component {
  state = {
    base: [],
  };

  async componentDidMount() {
    const { message } = this.props;
    message && sweetInfo(message);
    this.getData();
  }

  getData = async () => {
    const getBase = axios.get(`/article/data`);
    const [base] = await Promise.all([getBase]);
    this.setState({
      base: base.data,
    });
  };

  render() {
    const { base } = this.state;
    return (
      <Fragment>
        <Base data={base} />
        <Trending />
        <section className="vizew-post-area mb-50">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-8">
                <div className="all-posts-area">
                  <Featured />
                  <div className="row mt-5 pt-3">
                    <Random />
                    <Random />
                  </div>
                  <Latest />
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-4">
                <IndexSidebar />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.user.message,
  };
};

export default connect(mapStateToProps)(Index);
