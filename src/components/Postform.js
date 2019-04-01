import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addPost} from '../actions/postActions'

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
           title: '',
           body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onReset(e) {
        this.setState({
            title: '',
            body: ''
        });
    }

    onSave(e) {
        e.preventDefault();
        
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.addPost(post);
    }
    

    render() {
       
        return (
        <div>
            <h3>Add more post</h3>
            <form onSubmit={this.onSave} onReset={this.onReset}>
                <div>
                    <label>Title:</label><br/>
                    <input type="text" name="title" onChange={this.onChange}
                     value={this.state.title} />
                </div>
                <br/>
                <div>
                    <label>Body:</label><br/>
                    <textarea type="text" name="body" onChange={this.onChange}
                     value={this.state.body} />
                </div>
                <br/>
                <button type="submit"> Save </button>
                <button type="reset"> Clear </button>
            </form>
            <hr/>
        </div>
        )
    }
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost}) (PostForm);