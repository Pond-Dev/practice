function useState(init_value = '') {
    let state: string = init_value
    let getState = function(): string{
        return state
    }

    let setState = function(value): void {
        return state = value
    }
    return {getState, setState}
}

let myState = useState() 
console.log(myState.getState()) // undefined

myState.setState('hello')
console.log(myState.getState())// hello

