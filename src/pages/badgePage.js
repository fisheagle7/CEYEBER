import React from 'react';
import { ThemeProvider } from 'styled-components';
import { badgePageTheme } from './../components/themes';
import { H1, Text } from './../components/Text';
import { Badge } from './../components/Image';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';

const BadgePage = ({ agent, badgeType, taskName, setTaskName }) => {
  const history = useHistory();

  const showbadgesWon = () => {
    if (taskName === 'Hack Attack') {
      setTaskName('Complete');
    }
    history.push('/cases');
  };

  return (
    <ThemeProvider theme={badgePageTheme}>
      <H1>You earned the badge!</H1>
      <Text>Well done {agent}!</Text>
      <Badge badgeType={badgeType} />
      <Button onClick={showbadgesWon}>Accept</Button>
    </ThemeProvider>
  );
};

export default BadgePage;
