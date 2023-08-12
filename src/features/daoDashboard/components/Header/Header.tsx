import { Container, makeStyles } from '@material-ui/core';
import { styles } from './styles';

const useStyles = makeStyles(styles);

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <div className={classes.title}>DAO Dashboard</div>
      </Container>
    </div>
  );
};
