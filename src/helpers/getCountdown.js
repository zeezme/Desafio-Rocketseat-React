export class countdown {
    constructor(finalDate) {
        this._currentDate = new Date();
        this._finalDate = new Date(finalDate);
        this._dateLeft = this._finalDate - this._currentDate;
    }
    
    hasEnded() {
        return this._dateLeft < 0 ? 'true' : 'false'
    }
    formatter(number) {
        return number <= 9 ? "0" + number : number
    }
    days() {
        const days = Math.floor(this._dateLeft / 86400000);
        return this._dateLeft < 0 ? '00' : (this.formatter(days))
        
    }
    hours() {
        const hours = Math.floor((this._dateLeft / 3600000) % 24);
        return this._dateLeft < 0 ? '00' : (this.formatter(hours))
    }
    mins() {
        const mins = Math.floor((this._dateLeft / 60000) % 60);
        return this._dateLeft < 0 ? '00' : (this.formatter(mins))
    }
    secs() {
        const secs = Math.floor((this._dateLeft / 1000) % 60);
        return this._dateLeft < 0 ? '00' : (this.formatter(secs))
    }



}
