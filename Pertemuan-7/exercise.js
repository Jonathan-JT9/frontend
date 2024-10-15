let jona = {
            firstName: "jona",
            tinggi: 160,
            berat: 55,
            bmi: function () {
                let bmi = this.berat / ((this.tinggi / 100) * (this.tinggi / 100));  // Calculate BMI
                console.log("BMI: " + bmi.toFixed(2));  // Optional, to see the BMI value
        
                if (bmi >= 40) {
                    console.log("Morbidly Obese");
                } else if (bmi >= 35 && bmi < 40) {
                    console.log("Severely Obese");
                } else if (bmi >= 30 && bmi < 35) {
                    console.log("Moderately Obese");
                } else if (bmi >= 25 && bmi < 30) {
                    console.log("Overweight");
                } else if (bmi >= 18.5 && bmi < 25) {
                    console.log("Normal");
                } else if (bmi >= 16 && bmi < 18.5) {
                    console.log("Underweight");
                } else {
                    console.log("Severely Underweight");
                }
            }
        };
        
        console.log(jona);
        jona.bmi();