const {getAllLaunches, getLaunch ,postLaunch , deleteLaunch } = require('../models/launches.model')

function getLaunches(req, res)
{
   
        return res.status(200).json(getAllLaunches()) ;
}

function httpPostLaunches(req, res)
{
        const launch = req.body ;

        if( launch && launch.launchDate && launch.mission && launch.rocket && launch.target)
        {
                if(isNaN(new Date(launch.launchDate)))
                {
                        res.status(400)
                        res.json({error :"Invalid Date"});
                        return ;
                }
                postLaunch(launch)
                const newLaunch =  getLaunch(launch.flightNumber );
                console.log(newLaunch);

               if(newLaunch)
               {
                res.status(201)
                res.statusMessage="Sucessfully Added!"
                res.json(newLaunch)
               }
               else
               {
                res.status(400)
                res.json({error :"error"});
               }

        }
        else
        {       
                res.status(400)
                if(!launch)
                res.statusMessage="Body not found in the request"
                else   if(isNaN(new Date(launch.launchDate)))
                res.statusMessage=" Invalid launch date"
                else   if(!launch.mission)
                res.statusMessage="Invalid mission"
                else   if(!launch.rocket)
                res.statusMessage="Invalid rocket"
                else   if(!launch.target  )
                res.statusMessage="Invalid target"
                else
                res.statusMessage="error"

                res.json(launch);
        }
}

function httpDeleteLaunches(req, res)
{      
       
        const id = req.params.id ;

        if( deleteLaunch(+id) )
        {
                res.status=200;
                res.json({success: " completed"}) ;       
        }
        else
        {
                res.status = 400;
                res.json({error : "Cannot delete"})
        }


}
module.exports = { getLaunches , httpPostLaunches , httpDeleteLaunches } 
