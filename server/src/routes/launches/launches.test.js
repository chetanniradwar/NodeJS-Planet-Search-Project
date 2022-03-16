const request = require('supertest')
const app = require('../../app')
const {connectDB, disconnectDB} = require('../../services/mongo')

describe('Launches API',()=>{

beforeAll(async ()=>{
    await connectDB();
})



describe("Test GET/launches" , () =>{
   test('It should respond with 200 success', async () =>{
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type' , /json/ )
        .expect(200)
        // expect(response.statusCode).toBe(200);
    })
})

describe('Test POST/launches', () =>{
const completeLaunchData = {
    mission :'USS Enterprisse',
    rocket:'BAC',
    target:'Kepler-186 f',
    launchDate : 'January 4, 2028'

}
const wrongDateLaunchData = {
    mission :'USS Enterprisse',
    rocket:'BAC',
    target:'Kepler-186 f',
    launchDate : 'January 32, 2028'

}
const launchDataWithoutDate =
    {
        mission :'USS Enterprisse',
        rocket:'BAC',
        target:'Kepler-186 f',
        

    }

    test('It should respond with 200 success' ,async () =>{
            const response = await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type' , /json/)
            .expect(201)
            const requestDate = new Date(completeLaunchData.launchDate)
            const responseDate =  new Date(response.body.launchDate) ;
            expect(responseDate).toMatchObject(requestDate) 
    })
    test('It should catch missing required properties', async () =>{
        const response = await request(app)
        .post('/launches')
        .send(launchDataWithoutDate)
        .expect('Content-Type' , /json/)
        .expect(400)

        // expect(response.body).toStrictEqual(launchDataWithoutDate)
    })
    test('It should catch invalid dates',async () =>{
        const response = await request(app)
        .post('/launches')
        .send(wrongDateLaunchData)
        .expect('Content-Type' , /json/)
        .expect(400)

        // expect(response.body).toStrictEqual({error:"Invalid Date"})
    })

})


afterAll(async ()=>{
    await disconnectDB();
})

})
