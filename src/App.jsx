import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectTags,
} from "./redux/tags/selector.js";
import TagsList from "./components/TagsList/TagsList.jsx";
import { fetchTags } from "./redux/tags/operations.js";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const tags = useSelector(selectTags);

  useEffect(() => {
    dispatch(fetchTags());
    console.log(tags);
  }, [dispatch]);

  return (
    <>
      <>
        {isLoading && !error ? (
          <p>Wczytywanie Listy Tagów...</p>
        ) : tags.length === 0 && !error ? (
          <p>Lista Tagów jest pusta.</p>
        ) : (
          <TagsList tags={tags} />
        )}
      </>
    </>
  );
};

export default App;
