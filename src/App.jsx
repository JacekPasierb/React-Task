import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectTags,
} from "./redux/tags/selector.js";
import { TagsList } from "./components/TagsList/TagsList.jsx";
import { fetchTags } from "./redux/tags/operations.js";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const tags = useSelector(selectTags);
  const [page, setPage] = useState(1);
  const [pagesize, setPageSize] = useState(100);

  useEffect(() => {
    dispatch(fetchTags({ page, pagesize }));
  }, [dispatch, page, pagesize]);

  return (
    <div className="container">
      {isLoading && !error ? (
        <p>Wczytywanie Listy Tagów...</p>
      ) : tags.length === 0 && !error ? (
        <p>Lista Tagów jest pusta.</p>
      ) : (
        <TagsList tags={tags} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default App;
