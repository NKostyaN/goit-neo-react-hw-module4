import ReactModal from "react-modal";

const ImageModal = () => {
  return (
    <div>
      <ReactModal isOpen={false}>
        <p>Modal Content</p>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
