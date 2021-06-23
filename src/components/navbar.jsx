import React, {Component} from 'react';
class NavBar extends Component {
    render() { 
        const {onReset,moves} = this.props;
        return (
            <nav className="navbar navbar-light bg-light">
                <h1 href="" className="navbar-brand">
                    Moves: <span className="badge badge-pill badge-secondary">{moves}</span>
                </h1>
                <div>
                    <select id="difficulty" className="mr-2">
                        <option value="Normal">Normal</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <button onClick={onReset} className="btn btn-secondary">Reset</button>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;