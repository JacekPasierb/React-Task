import React from "react";
import PropTypes from "prop-types";

const TagsList = ({ tags }) => {
  console.log("tags", tags);
  return (
    <>
      <h1>Lista Tagów</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.name}>{tag.name}</li>
        ))}
      </ul>
    </>
  );
};

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagsList;
