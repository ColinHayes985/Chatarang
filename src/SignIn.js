import React, {Component} from 'react'

class SignIn extends Component{
    state={
        email:'',
    }
    handleChange=(ev)=>{
        this.setState({email:ev.target.value})
    }
    render(){
        return(
            <div className="SignIn">
                <form>
                    <input type="email" name="email" placeholder="yourname@example.com" value={this.state.email} onChange={this.handleChange} autoFocus/>
                    <button type="submit">
                        SignIn
                    </button>
                </form>
            </div>
        )
    }
}

export default SignIn