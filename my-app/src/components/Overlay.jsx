const Overlay = ({ isVisible, children, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


export default Overlay