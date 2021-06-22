import { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actionsUdate from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  saveChangeInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    const { update } = this.props;
    return (<div className="homeContainer">
      {/* <Link to="/login">Login</Link>
			<Link to="/cadastro">Cadastro</Link> */}
      <h1>{this.props.lerPage}</h1>
      <form>
        <input type="email" id="email" onChange={(e) => update(e.target.value, e.target.id)} />
        <input type="password" id="password" onChange={(e) => update(e.target.value, e.target.id)} />
        <button type="submit">OK</button>
      </form>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  lerPage: state.page,
});

const mapDispatchToProps = (dispatch) => ({
  update: (value, type) => dispatch(actionsUdate(value, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
