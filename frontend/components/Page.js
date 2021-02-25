import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h2>This is the page Component</h2>
      <h2>{cool}</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
