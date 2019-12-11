import React, {Component} from 'react'
import Post from '../Post/Post'
class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            search: '',
            userposts: true,
            posts: []
        }
    }
    render(){
        let mappedPosts = this.state.posts.map((post, index) => {
            return (
                <Post key={index} post={post} />
            )
        })
    return (
        <div>Dashboard Component
            <input name='search'/>
            <button>Search</button>
            <button>Reset</button>
            <input type='checkbox'></input>
            {mappedPosts}
        </div>
        )
    }
}

export default Dashboard