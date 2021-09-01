import React, { Component } from 'react'
import propTypes from 'prop-types';
import {connect} from 'react-redux'; // connects your components with redux store, provided by provider component
import { fetchPost } from '../actions/PostAction'

 class Posts extends Component {
    //  constructor(props){
    //     super(props);
    //     this.state = {
    //         posts :[]
    //     }
    //  }
    

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data=> this.setState({posts:data}));
    // }

    // constructor(props) {
    //     super(props)
    //     this.props.fetchPost();
    // }

    componentWillMount() {
        this.props.fetchPost();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }

    }

    render() {
        const postItems = this.props.posts.map((post) => {
            return (
                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </div>
            )
          
        })
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}
Posts.propTypes = {
    fetchPost: propTypes.func.isRequired,
    post:propTypes.array.isRequired, 
    post: propTypes.object
}

const mapStateToProps = (state) => ({
    posts: state.posts.items, 
    newPost: state.posts.item

})

export default connect(mapStateToProps, { fetchPost })(Posts);
