import { compose } from 'ramda'

const sizeOrLength = val => 
    Array.isArray(val) ? arr.length : val

const setStartValues = size => 
    size % 2 === 0 ? 
        { start: 2, interval: 1, size } : 
        { start: 3, interval: 2, size }

const suggestion = ({start, interval, size, result=[] }, fn) => 
    fn({
        start: start+interval,
        interval,
        size,
        result: (size%start !== 0) ? 
            result : 
            [...result, start]
    })
  
const buildSuggestions = ({start,interval,size,result=[]}) => 
    start<=Math.floor(size/2) ? 
        suggestion({start,interval,size,result}, buildSuggestions) : 
        result

const appendResultRows = (first, last, result) => [
    ...result,
    [first, last],
    [last, first]
]

const createGroups = ([first, ...rest], result=[]) => {
    const [ last, ...remaining ] = rest.reverse()
    return !remaining.length ? 
        appendResultRows(first, last, result).reverse() :
        createGroups(
            remaining, 
            appendResultRows(first, last, result)
        ) 
}

const sendResult = (suggestions) => 
    !suggestions.length ? null : createGroups(suggestions) 

export const suggest = size => compose(
    sendResult,
    buildSuggestions,
    setStartValues,
    sizeOrLength
)(size)
