import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const generateDefaultState = () => {
    const feedback = localStorage.getItem("feedback");
    if (feedback) {
      return JSON.parse(feedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState(generateDefaultState);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    totalFeedback === 0
      ? 100
      : Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <br />
      <Options updateFeedback={updateFeedback} total={totalFeedback} />
      <br />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
