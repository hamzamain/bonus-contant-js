const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-26');

if(date1.getTime() < date2.getTime() ){
    console.log('march is before december');
}
else{
    console.log('march is after december')
}