const launches = require('./launches.mongo');
const planets = require('./planets.mongo')

const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration T",
    rocket: "Tesla K9",
    launchDate: new Date('March 30, 2022'),
    target: 'Kepler-442 b',
    customers: ['Tesla', 'NASA'],
    upcoming: true,
    success: true,

}

async function loadLaunches() {
    try {
        await launches.updateOne({ flightNumber: 100 }, launch, { upsert: true });
    }
    catch (err) {
        console.log(`Error --> ${err}`)
    }
}

async function getAllLaunches() {
    const allLaunches = await launches.find({},{__v:0 ,_id:0})
    return allLaunches;
}


async function postLaunch(launch) {
        const planetexists = await planets.findOne({ kepler_name: launch.target },{},{})
    if (!planetexists)
        throw new Error("Planet is not listed")

    const lastEntry = await launches.findOne().sort('-flightNumber');

    // console.log(lastEntry);
    const nextFlightNumber = lastEntry.flightNumber + 1;
    launch.flightNumber = nextFlightNumber;
    launch.customers = ["SpaceX", "ISRO", "NASA"]
    launch.upcoming = true;
    launch.success = true;
    launch.launchDate = new Date(launch.launchDate)

    try {
        await launches.create(launch);
    }
    catch (err) {
        throw new Error(err)
    }
    return launch;

}

async function deleteLaunch(id) {
    const response = await launches.updateOne({ flightNumber: id }, { upcoming: false, success: false },)
    if (response.matchedCount == 0)
        return "Launch does not exist"
    if (!response.acknowledged)
        return "Write Assess Disabled"

    return "Success"

}
module.exports = { getAllLaunches, postLaunch, loadLaunches, deleteLaunch }






