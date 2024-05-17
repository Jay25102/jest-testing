const markov = require("./markov");

describe("markovMachine", function() {

    test("regex", function() {
        let text = "the quick brown fox";
        let mm = new markov.MarkovMachine(text);
        let res = ["the", "quick", "brown", "fox"];

        expect(mm.words).toEqual(res);
    })
    
    test("chains", function() {
        // repeating this setup because putting this in beforeEach doesn't work?
        let text = "the quick brown fox";
        let mm = new markov.MarkovMachine(text);
        mm.makeChains();

        expect(mm.chains).not.toBeNull();
        // must return a map
        expect(mm.chains).toEqual(expect.any(Map));
    });

    test("makeTest", function() {
        let text = "the quick brown fox";
        let mm = new markov.MarkovMachine(text);

        expect(mm.makeText()).toEqual(expect.any(String));
    });
});