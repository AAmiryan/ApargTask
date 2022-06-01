import { Select } from "antd";
import React from "react";
import "./Filters.scss";

const Filters = ({ options, defaultValue }) => {
  const { Option } = Select;
  return (
    <div className="wrapperFilters">
      <div>
        <Select
          defaultValue={defaultValue || options[0]}
          style={{ width: 172, height: 40, marginRight: 10 }}
        >
          {options.map((item) => {
            return (
              <Option value={item} key={item}>
                {item}
              </Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default Filters;
