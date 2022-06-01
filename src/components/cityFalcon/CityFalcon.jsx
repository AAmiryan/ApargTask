import { FilterOutlined, RedoOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Filters from "../filters/Filters";
import Header from "../header/Header";
import MainButtons from "../mainButtons/MainButton";
import CityCard from "../card/Card";
import { List, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { languages, order, times } from "../../constants/index";

import "./CityFalcon.scss";
import { Button } from "antd";

const CityFalcon = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(10);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadMoreData = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=${page}`
      );
      let resData = await response.json();
      setData([...resData.stories]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (!loading) {
      loadMoreData();
    }
  }, [page]);

  const handleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <Header />
      <div className="cityFalconWrapper">
        <h1 className="watchlistName">Watchlist Name</h1>
        <div className="buttonsWrapper">
          <MainButtons text="Refresh">
            <RedoOutlined style={{ color: "#3971c1" }} />
          </MainButtons>
          <MainButtons text="Filters" handleClick={handleOpenFilter}>
            <FilterOutlined style={{ color: "#3971c1" }} />
          </MainButtons>
        </div>
        {isFilterOpen && (
          <div className="filtersWrapper">
            <Filters options={times} />
            <Filters options={order} />
            <Filters options={languages} />
            <Button type="primary" className="resetButton">
              Reset
            </Button>
          </div>
        )}
        <div>
          <InfiniteScroll
            dataLength={data.length}
            next={(e) => {
              setPage((prevPage) => prevPage + 10);
            }}
            hasMore={data.length < 41}
            loader={
              <Skeleton
                avatar
                paragraph={{
                  rows: 1,
                }}
                active
              />
            }
            endMessage={<Divider plain>Data is over...</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={data}
              renderItem={(item) => <CityCard item={item} key={item.uuid} />}
            />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default CityFalcon;
