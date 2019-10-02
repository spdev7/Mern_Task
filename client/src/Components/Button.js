import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  input: {
    display: 'none'
  },
  text: {
    color: 'white',
    textDecoration: 'none'
  }
};

function ContainedButtons(props) {
  const path = props.path;
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        <Link
          style={styles.text}
          to={{
            pathname: `${path}`,
            state: {
              data: props.data,
              update: true
            }
          }}
        >
          Update
        </Link>
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
