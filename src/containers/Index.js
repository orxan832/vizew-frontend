import React, { Fragment, useEffect, useState } from "react";
import Base from "../components/articles/Base";
import Trending from "../components/articles/Trending";
// import Featured from "../components/articles/Featured";
// import Random from "../components/articles/Random";
import Latest from "../components/articles/Latest";
import IndexSidebar from "../components/sidebars/IndexSidebar";
import axios from "../helper/axios";
import Loader from "../components/UI/Loader";

const Index = () => {

  const [base, setBase] = useState(false);
  const [trending, setTrending] = useState(false);
  const [latest, setLatest] = useState(false);
  const [oneAyahAndOneHadith, setOneAyahAndOneHadith] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cancel for when component unmount destroy component state
    let cancel = false;
    const getData = async () => {
      try {
        const getBase = axios.get(`/article/likesData`);
        const getTrending = axios.get(`/article/trendData`);
        const getLatest = axios.get(`/article/latestData`);
        const getOneAyahAndOneHadith = axios.get(`/ayah/getOneAyahAndOneHadith`);
        const [base, trending, latest, oneAyahAndOneHadith] = await Promise.all([getBase, getTrending, getLatest, getOneAyahAndOneHadith]);
        if (cancel) return;
        setBase(base.data);
        setTrending(trending.data);
        setLatest(latest.data);
        setOneAyahAndOneHadith(oneAyahAndOneHadith.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getData();

    return () => cancel = true;
  }, [])

  return (
    <Fragment>
      {loading && <Loader />}
      {base && <Base data={base} />}
      {trending && <Trending data={trending} />}
      <section className="vizew-post-area mb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-8">
              <div className="all-posts-area">
                {/* <Featured /> */}
                {/* <div className="row mt-5 pt-3">
                  <Random />
                  <Random />
                </div> */}
                {latest && <Latest data={latest} />}
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              {oneAyahAndOneHadith && <IndexSidebar data={oneAyahAndOneHadith} />}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Index;