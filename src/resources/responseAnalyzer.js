

export default class Analyzer{
    constructor(questions, results){
        this.questions = questions;
        this.results = results;

        this.getProfile = this.getProfile.bind(this)
        this.getTriviaResult = this.getTriviaResult.bind(this)
    }

    validate(){
          if (!this.questions || !this.results) {
            throw new Error("Analyzer: you must enter valid parameters");
          } else if (this.questions.length === 0 || this.results.length === 0) {
            throw new Error("Analyzer: you must pass non empty arrays as parameters");
          }
          if (this.results.length !== this.questions.length) {
            throw new Error("Analyzer: you must pass a result for each question");
          }
    }


    getProfile() {
        let largest = "";
        let largestSum = 0;
        const types = {};
        this.validate();

        const incrementTypeCount = category => {
            let sum;
            if (types[category]) {
              sum = types[category]++;
            } else {
              sum = types[category] = 1;
            }
            return sum;
        }

        const isLargest = (category, catCount)=>{
            if (largestSum <= catCount) {
              largest = category;
              largestSum = catCount;
            }
        
            return;
          }

        this.questions.forEach((question, index) => {
            let result = this.results[index];
            let stringRes = `${result}`;
            let rIndex = this.pickNumber(stringRes);
            let category = question.responses[rIndex].category;
            isLargest(category, incrementTypeCount(category));
          });
        
          return largest;
    }

    getTriviaResult(){
        console.log(this.results)
        this.validate();
        let score = 0;
        this.questions.forEach((question,index)=>{
            let result = this.results[index];
            let stringRes = `${result}`;
            const rNum =this.pickNumber(stringRes);
            const isCorrect = question.responses[rNum].correct;
            if (isCorrect) score++;
        })

        return score;
    }

    pickNumber(id) {
        console.log(id);
        const idInt = parseInt(id.substr(-1),10);
      
        if (!idInt) {
          throw new Error("Analyzer: question ID cannot be parsed");
        } else {
          return idInt - 1;
        }
      }
}
// export default function(this.questions, results, id) {

//   validate(this.questions, results, id);

//   console.log(this.questions, results, id);

//   if (id === "foodie") {
//     return pickProfile(this.questions, results);
//   }
// }




