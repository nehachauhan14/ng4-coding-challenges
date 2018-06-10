describe("Marco polo suite", function(){

    var actual = "1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30";

    it("shhould be equal to actual string", function(){
        expect(marcoPoloFunc(30)).toEqual(actual);
    })
})