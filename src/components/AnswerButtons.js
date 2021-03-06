import React from 'react';
import { Button, SubmitButton } from './Buttons.js';
import { useHistory } from 'react-router-dom';
import { collectData } from './collectData';

export function CorrectButton({
  points,
  setPoints,
  label,
  timeLeft,
  taskName,
  answerArray,
  setAnswerArray,
  badgesWon,
  setBadgesWon,
  nextPage,
  disabled,
  answers,
  setAnswers,
  passwordPoints,
  setPasswordPoints
}) {
  const history = useHistory();
  const handleCorrectClick = () => {
    if (taskName === 'Hack Attack') {
      setAnswerArray([...answerArray, label]);
      setPasswordPoints(oldScore => oldScore + 3);
      setBadgesWon({ ...badgesWon, case3: taskName });
    } else {
      if (points > 8) {
        setPoints(11);
      } else {
        setPoints(points + 3);
      }

      if (taskName === 'Troll Hunter') {
        setBadgesWon({ ...badgesWon, case1: taskName });
        collectData(taskName, answers, setAnswers, 3);
      }

      if (taskName === 'Thief Buster') {
        setBadgesWon({ ...badgesWon, case2: taskName });
        collectData(taskName, answers, setAnswers, 3);
      }
    }

    history.push(nextPage);
  };
  return (
    <Button disabled={disabled} onClick={handleCorrectClick}>
      {label}
    </Button>
  );
}

export function WrongButton({
  points,
  setPoints,
  label,
  timeLeft,
  taskName,
  answerArray,
  setAnswerArray,
  nextPage,
  disabled,
  answers,
  setAnswers,
  passwordPoints,
  setLostScore,
  setPasswordPoints
}) {
  const history = useHistory();

  const handleWrongClick = () => {
    if (taskName === 'Hack Attack') {
      setAnswerArray([...answerArray, label]);
      setPasswordPoints(oldScore => oldScore - 2);
    } else {
      if (points > 0) {
        setLostScore('2 points');
        setPoints(points - 2);
      }

      collectData(taskName, answers, setAnswers, -2);
      history.push(nextPage);
    }
  };

  return (
    <Button disabled={disabled} onClick={handleWrongClick}>
      {label}
    </Button>
  );
}

export function IgnoreButton({
  points,
  setPoints,
  label,
  timeLeft,
  taskName,
  answerArray,
  setAnswerArray,
  nextPage,
  disabled,
  answers,
  setAnswers,
  passwordPoints,
  setLostScore,
  setPasswordPoints
}) {
  const history = useHistory();

  const handleIgnoreClick = () => {
    if (taskName === 'Hack Attack') {
      setAnswerArray([...answerArray, label]);
      setPasswordPoints(oldScore => oldScore - 1);
    } else {
      if (points > 0) {
        setLostScore('1 point');
        setPoints(points - 1);
      }

      collectData(taskName, answers, setAnswers, -1);
      history.push(nextPage);
    }
  };

  return (
    <Button disabled={disabled} onClick={handleIgnoreClick}>
      {label}
    </Button>
  );
}

export const SubmitPasswordButton = ({ setTimeLeft }) => {
  return (
    <SubmitButton onClick={() => setTimeLeft(0)}>Submit Password!</SubmitButton>
  );
};
