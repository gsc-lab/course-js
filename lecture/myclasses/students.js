class Student {
    id = undefined;
    name = undefined;
    #grades = undefined;
    #sum = undefined;
    #avg = undefined;

    constructor(argId, argName, argKorean = 0, argMath = 0, argEnglish = 0){
        this.id = argId;
        this.name = argName;
        this.#grades = [argKorean, argMath, argEnglish];
        this.#calcStats();
    }

    #calcStats(){
        this.#sum = this.#grades.reduce((acc, v) => acc + v, 0);
        this.#avg = this.#sum / this.#grades.length;
    }

    setGrade(argIndex, argScore){
        if(argIndex < 0 || argIndex >= this.#grades.length)
            return false;

        this.#grades[argIndex] = argScore;
        this.#calcStats();
        return true;
    }

    get getGrade() {return this.#grades;}
    get sum() { return this.#sum; }
    get avg() { return this.#avg; }

    toString() {
        const [kor, math, eng] = this.getGrade;
        return `${this.id}\t${this.name}\t${kor}\t${math}\t${eng}\t${this.sum}\t${this.avg.toFixed(2)}`;
    }
}

export {Student};
