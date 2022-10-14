const checkPossibleCombination = (combination='') => {
    let possibility;
    const knownCombinations = [
        'one', 'who', 'two', 'bob', 'add',
        'owl', 'fab', 'den', 'mia', 'tat',
    ];

    possibility = combination.split('').every((letter, index) => (
        knownCombinations.find(known => known[index] === letter)
    ));

    if(combination.length !== 3) possibility = false;
    
    return possibility ? 'possible' : 'not possible';
}