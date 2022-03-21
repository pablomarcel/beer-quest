describe("Beer App", ()=>{
//
     describe("urlBuilder", ()=> {

         const url1 = 'https://api.openbrewerydb.org/breweries?page=1&per_page=5&by_state=Washington&by_city=Bothell&sort=type,name:asc'

         const state = 'Washington'

         const city = 'Bothell'

         const page = '1'

         it("should return an url", ()=>{
             let result = urlBuilder(state, city, page)
             expect(result).toEqual(url1)
         })




     })

    describe("Empty Response Checker", ()=> {

        const url1 = 'https://api.openbrewerydb.org/breweries?page=3&per_page=5&by_state=Washington&by_city=Bothell&sort=type,name:asc'

        it("should return 0", (done)=>{

            let resp = fetch(url1).then(function (data){
                return data.json()
            }).then(function (respJson){
                expect(respJson.length).toEqual(0)
                done()
            })

        })

    })

    describe("Response Returns 5 Elements", ()=> {

        const url1 = 'https://api.openbrewerydb.org/breweries?page=1&per_page=5&by_state=Washington&by_city=Bothell&sort=type,name:asc'

        it("should return 5", (done)=>{

            let resp = fetch(url1).then(function (data){
                return data.json()
            }).then(function (respJson){
                expect(respJson.length).toEqual(5)
                done()
            })

        })

    })

    describe("Response Returns 1 Element", ()=> {

        const url1 = 'https://api.openbrewerydb.org/breweries?page=2&per_page=5&by_state=Washington&by_city=Bothell&sort=type,name:asc'

        it("should return 1", (done)=>{

            let resp = fetch(url1).then(function (data){
                return data.json()
            }).then(function (respJson){
                expect(respJson.length).toEqual(1)
                done()
            })

        })

    })

//
//     // it("should be async", function(done){
//     //
//     //     fetch(url1).then(function(data){
//     //         expect(data).toBe(true)
//     //         done()
//     //     })
//     //
//     // })
//
//     // beforeEach(function() {
//     //     return new Promise(function(resolve, reject) {
//     //         // do something asynchronous
//     //         resolve();
//     //     });
//     // });
//     //
//     // it('does a thing', function() {
//     //     return fetch(url1).then(function (result) {
//     //         expect(result.json().copyright).toEqual("Copyright (c) 2022 The New York Times Company.  All Rights Reserved.");
//     //     });
//     // });
//
})