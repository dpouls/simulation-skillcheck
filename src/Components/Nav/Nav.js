import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'


class Nav extends Component {
    render(){
        console.log('nav', this.props)
        // console.log(this.props.user.profile_pic)
    return (
        <div>Nav Component
            <p>{this.props.user.username}</p>
            <img src={`${this.props.user.profile_pic}`} alt="profile pic"/>
           <Link to='/dashboard'><button>Home</button></Link>
           <Link to='/new'><button>New Post</button></Link>
           <Link to='/'><button>Log out</button></Link>
        </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
//    const username = reduxState.username 
//    const profile_pic = reduxState.profile_pic 
    return reduxState
}
export default connect(mapStateToProps)(Nav)
// {`${this.props.profile_pic}`}