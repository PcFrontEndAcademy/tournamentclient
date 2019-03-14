import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './index';

export default class DialogForm extends React.Component {
  state = {
    formData: {},
  };

  clearState = () => {
    this.setState({ formData: {} });
  };

  handleChange = event => {
    const { target } = event;
    this.setState(state => ({
      formData: Object.assign(state.formData, { [target.name]: target.value }),
    }));
  };

  submit = () => {
    this.props.handleSubmit(this.state.formData);
  };

  render() {
    const { buttonTitle, fields } = this.props;
    return (
      <Dialog
        buttonTitle={buttonTitle}
        handleSubmit={this.submit}
        beforeClose={this.clearState}
      >
        <form>
          {fields.map(item => {
            const children = React.cloneElement(item, {
              onChange: this.handleChange,
            });
            return <div>{children}</div>;
          })}
        </form>
      </Dialog>
    );
  }
}

DialogForm.defaultProps = {
  fields: [],
};

DialogForm.propTypes = {
  buttonTitle: PropTypes.string,
  fields: PropTypes.array,
  handleSubmit: PropTypes.func,
};
