import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import useSearchItems from "../../hooks/useSearchItems";
import {
  useAlertState,
  useAlertDispatch,
  pushAlert,
} from "../../contexts/Alert";
import { useEffect } from "react";

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
  const { alerts } = useAlertState();
  const alertDispatch = useAlertDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const { data } = await doSearchItems({ keyword: searchQuery });
    if (data?.length) {
      pushAlert(alertDispatch, { type: "info", text: "Data Found" });
    } else {
      pushAlert(alertDispatch, { type: "error", text: "No Data Found" });
    }

    history.push({
      pathname: "/search",
      search: `?keyword=${searchQuery}`,
    });
  };

  useEffect(() => {
    console.log("alertss?", alerts);
  }, [alerts]);

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

export default React.memo(SearchPage);
