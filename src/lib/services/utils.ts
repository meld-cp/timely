export class DateFormat{


    static toInputDateValue( dt:Date ) : string{
        // YYYY-MM-DD
        var day = dt.getDate();
        var month = dt.getMonth() + 1;
        var year = dt.getFullYear();

        const result = `${year}-${StringFormat.padLeft(month.toString(), "0", 2)}-${StringFormat.padLeft(day.toString(), "0", 2)}`;
        return result;
    }

}

export class NumberFormat{
    static currency( n:number, currency:string ) : string {
        const f = new Intl.NumberFormat(
            undefined,
            {
                style:"currency",
                currency:currency,
                currencyDisplay:"narrowSymbol"
            }
        );
        return f.format(n);
    }
}

export class StringFormat{

    static padLeft( s:string, fillWith:string, len:number ) : string{
        const lenToFill = len - s.length;

        for (let i = 0; i < lenToFill; i++) {
            s = fillWith[0] + s
        }

        return s;
    }

}