import css from "../Options/Options.module.css";
const Options = ({ updateFeedback, total }) => {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total > 0 && (
        <button onClick={() => updateFeedback("reset")}>Reset</button>
      )}
    </div>
  );
};

export default Options;
