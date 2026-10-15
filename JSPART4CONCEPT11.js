//A nested for...of loop is a for...of loop inside another for...of loop, used to iterate through nested arrays.”

let heroes = [["superman", "batman", "wonder woman"], ["spiderman", "ironman", "thor"]];
for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}