import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class DialogBase extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.beforeClose();
    this.setState({ open: false });
  };

  submit = () => {
    this.handleClose();
    this.props.handleSubmit();
  };

  render() {
    const { buttonTitle, children, handleSubmit } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          {buttonTitle}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Dialog</DialogTitle>
          <DialogContent>{children}</DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            {handleSubmit && (
              <Button onClick={this.submit} color="secondary">
                Save
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogBase.propTypes = {
  buttonTitle: PropTypes.string,
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  beforeClose: PropTypes.func,
};
