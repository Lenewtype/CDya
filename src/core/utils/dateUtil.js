export default function dateUtil(dateString) {
    let newDate = new Date(dateString);
    let month = newDate.getMonth() + 1;
    if(month < 10){
        month = '0'+month;
    }
    let day = newDate.getDate();
    if(day < 10){
        day = '0' + day;
    }
    return month + '/' + day + '/' + newDate.getFullYear();
}
