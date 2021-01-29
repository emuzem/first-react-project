import React, {Component} from 'react';
import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange (ev) {
        this.setState({
            text: ev.target.value
        });
    }

    onSubmit (e) {
        e.preventDefault();
        //e.target.reset();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render () {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input type="text" placeholder="Шо думаеш"
                       className="form-control new-post-label"
                       onChange={this.onValueChange}
                       value={this.state.text}
                />
                <button className="btn btn-outline-secondary ">Добавить</button>
            </form>
        )
    }
}
