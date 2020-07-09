function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if (numbers.length === 0) return 0
    let res = numbers[0]
    let times = 1
    for (let i of numbers) {
        if (times === 0) {
            res = i
            times = 1
        }
        else if (i === res) times++
        else times--
    }
    times = 0
    for (let i of numbers) {
        if (i === res) times++
    }
    return times > Math.floor(numbers.length / 2)? res: 0
    
}