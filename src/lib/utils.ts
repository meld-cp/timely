export class DateHelper{


    static toInputDateValue( dt:Date ) : string{
        // YYYY-MM-DD
        var day = dt.getDate();
        var month = dt.getMonth() + 1;
        var year = dt.getFullYear();

        const result = `${year}-${StringHelper.padLeft(month.toString(), "0", 2)}-${StringHelper.padLeft(day.toString(), "0", 2)}`;

        console.log(result);

        return result;
    }



}

export class StringHelper{

    static padLeft( s:string, fillWith:string, len:number ) : string{
        const lenToFill = len - s.length;

        for (let i = 0; i < lenToFill; i++) {
            s = fillWith[0] + s
        }

        return s;
    }

}