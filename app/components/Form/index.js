/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default class Form extends React.Component {
  state = {
    data: {},
  };

  handleChange = event => {
    const { target } = event;
    if (target) {
      this.setState(state => ({
        data: Object.assign(state.data, {
          [target.name]: target.value,
        }),
      }));
    }
  };

  submit = () => {
    this.props.handleSubmit(this.state.data);
  };

  render() {
    const { fields } = this.props;
    return (
      <form style={{ padding: '50px' }}>
        {fields.map(item => {
          const children = React.cloneElement(item, {
            onChange: this.handleChange,
          });
          return <div key={item.props.name}>{children}</div>;
        })}
        <Button
          color="primary"
          variant="contained"
          onClick={this.submit}
          style={{ marginTop: '50px' }}
        >
          Save
        </Button>
      </form>
    );
  }
}

Form.defaultProps = {
  fields: [],
};

Form.propTypes = {
  fields: PropTypes.array,
  handleSubmit: PropTypes.func,
};
