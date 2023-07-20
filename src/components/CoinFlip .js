import React, { Component } from 'react'
import Coin from './Coin'
  
class CoinFlip extends Component {
    static defaultProps = {
        coins: [
          
            {
                side: 'head', 
                imgSrc:
'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
            },
            {
                side: 'tail', 
                imgSrc:
'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
            }
        ]
    }
  
    constructor() {
        super()
        
        this.state = {
            currFace: null,
            totalFlips: 0,
            heads: 0
        }
        
        this.handleClick = this.handleClick.bind(this)
    }
  
    
    choice(arr) {
        const randomIdx = Math.floor(Math.random() * arr.length)
        return arr[randomIdx]
    }
  
    
    flipCoin() {
        const newFace = this.choice(this.props.coins)
        this.setState(curState => {
            console.log(curState);
            // console.log(this.props);
            // console.log(this.state.props);
            console.log(curState.heads);
            const heads = curState.heads +
                (newFace.side === 'head' ? 1 : 0)
                console.log(heads);
            return {
                currFace: newFace,
                totalFlips: curState.totalFlips + 1,
                heads: heads
            }
        })
    }
    handleClick() {   
        this.flipCoin()
    }
    render() {
        const { currFace, totalFlips, heads } = this.state
        return (
            <div>
                <h2>Let's flip a coin</h2>
               
                {currFace && <Coin info={currFace} />}
               
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>
                    Out of {totalFlips} flips, there have been {heads} heads
                    and {totalFlips - heads} tails
                </p>
            </div>
        )
    }
}
  
export default CoinFlip