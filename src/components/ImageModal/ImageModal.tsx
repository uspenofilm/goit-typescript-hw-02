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

type Props = {
  onClose: () => void;
  isOpen: boolean;
  url: string;
  alt: string;
};

export default function ImageModal({ onClose, isOpen, url, alt }: Props) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img src={url} alt={alt} />
    </Modal>
  );
}
