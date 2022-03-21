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

    describe("Response Returns truthy", ()=> {

        const url1 = 'https://api.openbrewerydb.org/breweries?page=1&per_page=5&by_state=California&by_city=Sunnyvale&sort=type,name:asc'

        it("should return true", (done)=>{

            let resp = fetch(url1).then(function (data){
                return data.json()
            }).then(function (respJson){
                expect(respJson).toBeTruthy()
                done()
            })

        })

    })

})