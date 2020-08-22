import React, { Component } from 'react'
import IUserSearch from '../interfaces/UserSearchInterface'
import axios from 'axios'

 interface IUserSearchState {
   current_search_str: string,
   searched_str: string
}

export class UserSearch extends Component <IUserSearch,IUserSearchState>{
    constructor(props: IUserSearch){
        super(props)
        this.state = {
            current_search_str: '',
            searched_str: ''
        }
    }
    onChangeText(val: React.ChangeEvent<HTMLInputElement>): void {
        console.log(val.currentTarget.value)
        this.setState({ current_search_str: val.currentTarget.value})
    }
    onButtonClick(): void{
        this.setState({searched_str: this.state.current_search_str})
    }
    
    render() {
        const { limitation, username } = this.props 
        return (
            <div>
            <h2>UserSearch Page</h2>
            <h3>Welcome back to our site</h3>
            <h3>{username}</h3>
            <span>You can only search {limitation} time for today</span>
            <br></br>
            <input type='text' onChange={this.onChangeText.bind(this)}></input>
            <button type='button' onClick={this.onButtonClick.bind(this)}> search</button>
            <p>{this.state.searched_str}</p>
            </div>
        )
    }
}
export default UserSearch
