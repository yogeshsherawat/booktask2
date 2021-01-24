const getDays = (day, month, year) => {
    switch (month) {
        case 1:
            return 31;
        case 2:
            return (year%4===0&& year%400!==0?29:28);
        case 3:
            return 31;
        case 5:
            return 31;
        case 7:
            return 31;
        case 8:
            return 31;
        case 10:
            return 31;
        case 12:
            return 31;
        default:
            return 30;
        
        
    }
        
    
}
export default getDays;