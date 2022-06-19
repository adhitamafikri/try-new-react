import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useSearchItems from "../../hooks/useSearchItems";

const RenderItems = ({ searchItems$ }) => {
  const { loading, data } = searchItems$;
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.length) {
    return <p>No Data</p>;
  }

  return searchItems$.data.map((data, idx) => (
    <div
      key={`search-item-${idx}`}
      style={{ width: "25%", margin: 8, height: "180px" }}
    >
      {data.name}
    </div>
  ));
};

const SearchPage = () => {
  const history = useHistory();
  const { searchItems$, doSearchItems } = useSearchItems();

  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await doSearchItems({ keyword: searchQuery });
    history.push({
      pathname: "/search",
      search: `?keyword=${searchQuery}`,
    });
  };

  return (
    <>
      <h1>This is SearchPage</h1>
      <form autoComplete="off" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(evt) => setSearchQuery(evt.target.value)}
        />
      </form>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <RenderItems searchItems$={searchItems$} />
      </div>
    </>
  );
};

export default SearchPage;
