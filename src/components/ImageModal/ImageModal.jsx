import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(169, 169, 169, 1)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ onClose, isOpen, url, alt }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img src={url} alt={alt} />
    </Modal>
  );
}
