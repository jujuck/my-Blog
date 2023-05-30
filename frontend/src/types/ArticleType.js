import PropTypes from "prop-types";

const articleType = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
  resume: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default articleType;
