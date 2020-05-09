
/**
 * Convert a given sql datetime string only time and second
 * @param date is a API date
 */
export const sqlDateCovertToTime = (date: string) => {
    let object_date = sqlToJsDate(date);
    return addZoroIfValueSmallerThan10(object_date.getHours()) + ':' + addZoroIfValueSmallerThan10(object_date.getMinutes());
}

/**
 * Convert a given ISO string only time and second
 * @param date is string of date object
 */
export const dateStringToTime = (date:string) => {
    let object_date = new Date(date);
    return addZoroIfValueSmallerThan10(object_date.getHours()) + ':' + addZoroIfValueSmallerThan10(object_date.getMinutes());
}

/**
 * Add began of the value 0 if value smaller than 10
 * @param value is a time value
 */
const addZoroIfValueSmallerThan10 = (value: number) => {
    return value < 10 ? '0' + value : value;
}

/**
 * Convert sql string to date
 * @param sqlDate is date string format of sql
 */
const sqlToJsDate = (sqlDate: string) =>  {
    //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
    let sqlDateArr1 = sqlDate.split("-");
    
    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']

    let sYear = parseInt(sqlDateArr1[0]);
    let sMonth = (Number(sqlDateArr1[1]) - 1);
    let sqlDateArr2 = sqlDateArr1[2].split(" ");

    //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']

    let sDay = parseInt(sqlDateArr2[0]);
    let sqlDateArr3 = sqlDateArr2[1].split(":");

    //format of sqlDateArr3[] = ['hh','mm','ss.ms']
    let sHour = parseInt(sqlDateArr3[0]);
    let sMinute = parseInt(sqlDateArr3[1]);
    let sqlDateArr4 = sqlDateArr3[2].split(".");

    //format of sqlDateArr4[] = ['ss','ms']

    let sSecond = parseInt(sqlDateArr4[0]);
    return new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond, 0);
}
