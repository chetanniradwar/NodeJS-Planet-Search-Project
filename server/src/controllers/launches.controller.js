const { getAllLaunches, postLaunch, deleteLaunch } = require('../models/launches.model')

async function getLaunches(req, res) {
        const allLaunches = await getAllLaunches()
        if (allLaunches)
                return res.status(200).json(allLaunches);
        else {
                return res.status(400).json("No launches")
        }
}

async function httpPostLaunches(req, res) {
        let launch = req.body;
        try {
                launch = await postLaunch(launch)
        }
        catch (err) {
                console.log(err)
                res.status(400)
                res.statusMessage = err.message
                res.json({ error: err.message });
                return;
        }
        res.status(201)
        res.statusMessage = "Sucessfully Added!"
        res.json(launch);
}

async function httpDeleteLaunches(req, res) {
                
        const id = req.params.id;
        const response = await deleteLaunch(+id)
        if(response ==="Success")
          {
                        res.status(200);
                res.json({ success: "completed" });
                
                }
        else {
                res.status(400) ;
                res.statusMessage = response ;
                res.json({ error: response })
        }
}
module.exports = { getLaunches, httpPostLaunches, httpDeleteLaunches } 
