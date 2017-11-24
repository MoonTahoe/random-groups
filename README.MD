Random Groups
=============
Random Groups is a module that allows you to group arrays at random. It's perfect for randomly grouping
users, game players, or any array. Random Groups also suggests ideal group sizes for your specific array.

Usage
-----

### Suggesting Group Sizes
The `suggest` function can be used to suggest evenly sized groups. If the number is prime, and the
group cannot be divided evenly into other groups, then the suggestion funciton simply returns a null. 

__Getting Suggestions__
```javascript

    import { suggest } from 'random-groups'

    var result = suggest(42)  

    console.log(result)

    // [
    //     [7, 6],
    //     [6, 7],
    //     [3, 14],
    //     [14, 3],
    //     [21, 2],
    //     [2, 21]
    // ]

```

__Suggesting Primes__
```javascript

    import { suggest } from 'random-groups'

    var result = suggest(13)  

    console.log(result)

    // null

```

### Group Arrays
**under construction**: Still building the array grouping function.


License
-------

The MIT License (MIT).

See the [LICENSE](LICENSE) file in this project for more details.