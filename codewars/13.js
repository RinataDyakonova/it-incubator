function bmi(weight, height) {
    let result = (weight / Math.pow(height, 2));
    switch (true) {
        case result <= 18.5:
        return 'Underweight';
        
        case result <= 25.0:
        return 'Normal';
        
        case result <= 30.0:
        return 'Overweight';
        
        default:
        return 'Obese';
        
    }
  }