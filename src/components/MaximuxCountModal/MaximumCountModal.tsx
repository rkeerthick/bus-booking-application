import "./MaximumCountModal.scss";

export type maximumCountModalProps = {
  closeModal: () => void;
};
const MaximumCountModal = ({ closeModal }: maximumCountModalProps) => {
  return (
    <div className="max-count-modal">
      <div className="max-count-modal__ccontainer">
        <p>Maximum only 4 seats can be selected at a once</p>
        <button
          className="max-count-modal__button"
          type="button"
          onClick={() => closeModal()}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default MaximumCountModal;
