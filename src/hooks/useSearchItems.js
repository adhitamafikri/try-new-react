import { useSelector, useDispatch } from "react-redux";

function useSearchItems() {
  const searchItems = useSelector((state) => state.searchItems);
  const dispatch = useDispatch();

  const searchItems$ = searchItems;

  const doSearchItems = ({ keyword = "" }) => {
    dispatch.searchItems.searchItems({ keyword });
  };

  return {
    // Return search items state
    searchItems$,

    // search items
    doSearchItems,
  };
}

export default useSearchItems;
