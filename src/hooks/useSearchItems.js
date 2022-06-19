import { useSelector, useDispatch } from "react-redux";

function useSearchItems() {
  const searchItems = useSelector((state) => state.searchItems);
  const dispatch = useDispatch();

  const searchItems$ = searchItems;

  const doSearchItems = async ({ keyword = "" }) => {
    const response = await dispatch.searchItems.searchItems({ keyword });
    return response;
  };

  return {
    // Return search items state
    searchItems$,

    // search items
    doSearchItems,
  };
}

export default useSearchItems;
