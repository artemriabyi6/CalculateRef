let isAssigned = prompt('Is customer assigned? (yes or no)')

let total = prompt('Enter total sum')

function calculating(total, isAssigned) {
    let res = 'Sum is '

    if(isAssigned === 'no') {
        let balance = prompt('Enter balance')
        res +=  (0.8 * total) - (total - balance)
    } else if(isAssigned === 'yes') {
        let cardOrBalance = prompt('Card or balance')

        switch(cardOrBalance) {
            case 'card' : res +=  (0.4 * total) + ' ' + '(returns to customer card)'
                          break;
            case 'balance' : res += (0.6 * total) + ' ' + '(returns to customer balance)'
                            break;

            default: alert('Choose card or balance')
        }
        
    } else {
        alert('Enter correct value')
    }
    
    return res 
}

alert(calculating(total, isAssigned))